import { memo } from "react";
import { animated } from "@react-spring/web";
import { useTheme } from "@nivo/core";
import { NodeProps } from "@nivo/treemap/dist/types/types";
import { Textfit } from "react-textfit";
import { to, SpringValue } from "@react-spring/web";

export const svgNodeTransform = (
  x: SpringValue<number>,
  y: SpringValue<number>,
) => to([x, y], (x, y) => `translate(${x},${y})`);

export const htmlNodeTransform = (
  x: SpringValue<number>,
  y: SpringValue<number>,
) => to([x, y], (x, y) => `translate(${x}px, ${y}px)`);

export const svgLabelTransform = (
  x: SpringValue<number>,
  y: SpringValue<number>,
  rotation: SpringValue<number>,
) =>
  to(
    [x, y, rotation],
    (x, y, rotation) => `translate(${x},${y}) rotate(${rotation})`,
  );

export const htmlLabelTransform = (
  x: SpringValue<number>,
  y: SpringValue<number>,
  rotation: SpringValue<number>,
) =>
  to(
    [x, y, rotation],
    (x, y, rotation) => `translate(${x}px,${y}px) rotate(${rotation}deg)`,
  );

export const htmlParentLabelTransform = (
  x: SpringValue<number>,
  y: SpringValue<number>,
  rotation: SpringValue<number>,
) =>
  to(
    [x, y, rotation],
    (x, y, rotation) =>
      `translate(${x - (rotation === 0 ? 0 : 5)}px,${
        y - (rotation === 0 ? 5 : 0)
      }px) rotate(${rotation}deg)`,
  );

const NonMemoizedTreeMapHtmlNode = <Datum extends object>({
  node,
  animatedProps,
  borderWidth,
  enableLabel,
  enableParentLabel,
  labelSkipSize,
}: NodeProps<Datum>) => {
  const theme = useTheme();

  const showLabel =
    enableLabel &&
    node.isLeaf &&
    (labelSkipSize === 0 || Math.min(node.width, node.height) > labelSkipSize);

  const showParentLabel = enableParentLabel && node.isParent;

  return (
    <animated.div
      data-testid={`node.${node.id}`}
      id={node.path.replace(/[^\w]/gi, "-")}
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: 0,
        left: 0,
        transform: htmlNodeTransform(animatedProps.x, animatedProps.y),
        width: animatedProps.width,
        height: animatedProps.height,
        borderWidth,
        borderStyle: "solid",
        borderColor: node.borderColor,
        overflow: "hidden",
      }}
    >
      <animated.div
        style={{
          boxSizing: "border-box",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: node.opacity,
          width: animatedProps.width,
          height: animatedProps.height,
          background: animatedProps.color,
        }}
        onMouseEnter={node.onMouseEnter}
        onMouseMove={node.onMouseMove}
        onMouseLeave={node.onMouseLeave}
        onClick={node.onClick}
      />
      {showLabel && (
        <animated.div
          data-testid={`label.${node.id}`}
          style={{
            ...theme.labels.text,
            textAlign: "center",
            position: "absolute",
            display: "flex",
            top: "-50%",
            left: "-50%",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "wrap",
            color: node.labelTextColor,
            transformOrigin: "center center",
            transform: htmlLabelTransform(
              animatedProps.labelX,
              animatedProps.labelY,
              new SpringValue(0),
            ),
            opacity: animatedProps.labelOpacity,
            pointerEvents: "none",
          }}
        >
          <Textfit
            mode="multi"
            style={{
              width: `90%`,
              height: `90%`,
              writingMode:
                animatedProps.labelRotation.toJSON() === 0
                  ? undefined
                  : "vertical-rl",
              transform:
                animatedProps.labelRotation.toJSON() === 0
                  ? ""
                  : "rotate(180deg)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "monospace",
            }}
          >
            {node.label}
          </Textfit>
        </animated.div>
      )}
      {showParentLabel && (
        <animated.span
          data-testid={`parentLabel.${node.id}`}
          style={{
            ...theme.labels.text,
            textAlign: "center",
            position: "absolute",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            whiteSpace: "wrap",
            width: "100%",
            height: 32,
            top: -8,
            color: node.parentLabelTextColor,
            transformOrigin: "top left",
            transform: htmlParentLabelTransform(
              animatedProps.parentLabelX,
              animatedProps.parentLabelY,
              new SpringValue(0),
            ),
            opacity: animatedProps.parentLabelOpacity,
            pointerEvents: "none",
          }}
        >
          <Textfit
            mode="multi"
            style={{
              width: `90%`,
              height: `90%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "monospace",
            }}
          >
            {node.parentLabel}
          </Textfit>
        </animated.span>
      )}
    </animated.div>
  );
};

export const TreeMapHtmlNode = memo(
  NonMemoizedTreeMapHtmlNode,
) as typeof NonMemoizedTreeMapHtmlNode;
