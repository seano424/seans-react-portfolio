import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const NavbarContext = createContext();

export function NavbarProvider(props) {
  const [open, setOpen] = useToggle(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavbarContext.Provider value={{ open, toggleOpen }}>
      {props.children}
    </NavbarContext.Provider>
  );
}
