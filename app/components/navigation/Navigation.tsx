'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from "../logo/logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Guides and Videos",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar classNames={{
      menu: " w-1/6",
    }} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
        <NavbarBrand>
          <Logo/>
          <p className="font-bold text-inherit">FD3</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="workouts">
            Workout
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="tracking" aria-current="page">
            Tracking
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="schedule">
            Schedule
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`${item.toLowerCase().replace(" ", "-")}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
