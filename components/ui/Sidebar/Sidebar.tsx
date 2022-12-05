import Link from "next/link";
import { FC, useContext } from "react";
import { UiContext } from "../../../context/ui";

const navLinks = [
  { pageTitle: "Blusas", pageLink: "blusas" },
  { pageTitle: "Camisetas", pageLink: "camisetas" },
  { pageTitle: "Camisas", pageLink: "camisas" },
  { pageTitle: "Shorts", pageLink: "shorts" },
];

const Sidebar = () => {
  const { isMenuOpen } = useContext(UiContext);

  return (
    <nav className={`sidebar${isMenuOpen ? " active" : ""}`}>
      <ul className="sidebar__list">
        {navLinks.map(({ pageLink, pageTitle }) => (
          <li key={pageLink}>
            <Link href={`/${pageLink}`}>{pageTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
