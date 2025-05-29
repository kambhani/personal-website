import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Link,
  Button,
} from "@heroui/react";
import {
  GraduationCapIcon,
  CaretDownIcon,
  CertificateIcon,
  SuitcaseSimpleIcon,
  FlaskIcon,
  LaptopIcon,
  LightbulbFilamentIcon,
  ListChecksIcon,
  RocketIcon,
  BuildingsIcon,
  HouseIcon,
  SunIcon,
  MoonIcon,
} from "@phosphor-icons/react";
import useDarkMode from "use-dark-mode";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  const menuItems = [
    {
      name: "Home",
      icon: <HouseIcon className="mr-2 text-blue-700" size={20} />,
    },
    {
      name: "Education",
      icon: <GraduationCapIcon className="mr-2 text-fuchsia-700" size={20} />,
    },
    {
      name: "Experience",
      icon: <SuitcaseSimpleIcon className="mr-2 text-amber-700" size={20} />,
    },
    {
      name: "Certifications",
      icon: <CertificateIcon className="mr-2 text-sky-600" size={20} />,
    },
    {
      name: "Research",
      icon: <FlaskIcon className="mr-2 text-lime-500" size={20} />,
    },
    {
      name: "Projects",
      icon: <LaptopIcon className="mr-2 text-rose-500" size={20} />,
    },
    {
      name: "Skills",
      icon: <ListChecksIcon className="mr-2 text-emerald-500" size={20} />,
    },
    {
      name: "Hobbies",
      icon: <RocketIcon className="mr-2 text-orange-600" size={20} />,
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="#home">
            <p className="hidden w-full p-2 text-center font-mono text-2xl font-bold tracking-widest text-foreground md:flex md:w-min">
              {"{AK}"}
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="md:hidden">
        <NavbarBrand className="justify-center">
          <Link className="text-right" href="#home">
            <span className="w-full p-2 text-center font-mono text-2xl font-bold tracking-widest text-foreground md:w-min">
              {"{AK}"}
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarItem>
          <Link
            className="inline-flex align-top"
            color="foreground"
            href="#education"
          >
            <GraduationCapIcon className="mr-1 text-fuchsia-500" size={20} />
            Education
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
                endContent={<CaretDownIcon size={20} />}
                radius="sm"
                variant="light"
              >
                <BuildingsIcon className="text-slate-400" size={20} />
                Credentials
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Professional credentials"
            className="w-40"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="experience"
              href="#experience"
              startContent={
                <SuitcaseSimpleIcon className="text-amber-700" size={24} />
              }
            >
              Experience
            </DropdownItem>
            <DropdownItem
              key="certifications"
              href="#certifications"
              startContent={
                <CertificateIcon className="text-sky-600" size={24} />
              }
            >
              Certifications
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
                endContent={<CaretDownIcon size={24} />}
                radius="sm"
                variant="light"
              >
                <LightbulbFilamentIcon className="text-purple-500" size={20} />
                Ideas
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Professional credentials"
            className="w-40"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="experience"
              href="#research"
              startContent={<FlaskIcon className="text-lime-500" size={24} />}
            >
              Research
            </DropdownItem>
            <DropdownItem
              key="certifications"
              href="#projects"
              startContent={<LaptopIcon className="text-rose-500" size={24} />}
            >
              Projects
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className="inline-flex align-top"
            color="foreground"
            href="#skills"
          >
            <ListChecksIcon className="mr-1 text-emerald-500" size={24} />
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="inline-flex align-top"
            color="foreground"
            href="#hobbies"
          >
            <RocketIcon className="mr-1 text-orange-600" size={20} />
            Hobbies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="default"
            isIconOnly
            variant="light"
            onClick={() => darkMode.toggle()}
          >
            {darkMode.value ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="inline-flex w-full align-top"
              href={`#${item.name.toLocaleLowerCase()}`}
              size="lg"
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
