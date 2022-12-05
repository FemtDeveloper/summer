import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UiContext } from "../../../context/ui";

const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <Image
            src="/summer-logo.png"
            alt="logo"
            className="main-logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="navbar-navigator__container">
          <a href={"contacts/1"}>Hola</a>
          <a href={"contacts/2"}>Hola</a>
          <a href={"contacts/3"}>Hola</a>
          <a href={"contacts/4"}>Hola</a>
        </div>
        <Button onClick={toggleSideMenu}>
          <MenuIcon fontSize="large" className="menu-icon" />
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
