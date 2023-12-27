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
} from "@nextui-org/react";
import {
  GraduationCap,
  CaretDown,
  User,
  Certificate,
  SuitcaseSimple,
  Laptop,
  ListChecks,
  Rocket,
  Buildings,
  House,
  Sun,
  Moon,
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
      icon: <House className="mr-2 text-blue-700" size={20} />,
    },
    {
      name: "Education",
      icon: <GraduationCap className="mr-2 text-fuchsia-700" size={20} />,
    },
    {
      name: "Experience",
      icon: <SuitcaseSimple className="mr-2 text-amber-700" size={20} />,
    },
    {
      name: "Testimonials",
      icon: <User className="mr-2 text-lime-700" size={20} />,
    },
    {
      name: "Certifications",
      icon: <Certificate className="mr-2 text-sky-600" size={20} />,
    },
    {
      name: "Projects",
      icon: <Laptop className="mr-2 text-violet-500" size={20} />,
    },
    {
      name: "Competencies",
      icon: <ListChecks className="mr-2 text-emerald-500" size={20} />,
    },
    {
      name: "Hobbies",
      icon: <Rocket className="mr-2 text-orange-600" size={20} />,
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
          <p className="hidden w-full p-2 text-center font-mono text-2xl font-bold tracking-widest text-inherit md:flex md:w-min">
            {"{AK}"}
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="md:hidden">
        <NavbarBrand>
          <p className="w-full p-2 text-center font-mono text-2xl font-bold tracking-widest text-inherit md:w-min">
            {"{AK}"}
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarItem>
          <Link
            className="inline-flex align-top"
            color="foreground"
            href="#education"
          >
            <GraduationCap className="mr-1 text-fuchsia-700" size={20} />
            Education
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
                endContent={<CaretDown size={20} />}
                radius="sm"
                variant="light"
              >
                <Buildings className="text-slate-400" size={20} />
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
              startContent={
                <SuitcaseSimple className="text-amber-700" size={24} />
              }
            >
              Experience
            </DropdownItem>
            <DropdownItem
              key="testimonials"
              startContent={<User className="text-lime-700" size={24} />}
            >
              Testimonials
            </DropdownItem>
            <DropdownItem
              key="certifications"
              startContent={<Certificate className="text-sky-600" size={24} />}
            >
              Certifications
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="inline-flex align-top" color="foreground" href="#">
            <Laptop className="mr-1 text-violet-500" size={20} />
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="inline-flex align-top" color="foreground" href="#">
            <ListChecks className="mr-1 text-emerald-500" size={20} />
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="inline-flex align-top" color="foreground" href="#">
            <Rocket className="mr-1 text-orange-600" size={20} />
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
            {darkMode.value ? <Sun size={20} /> : <Moon size={20} />}
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
