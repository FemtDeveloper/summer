import Link from "next/link";
import { FC } from "react";

const navLinks = [
  { pageTitle: "Blusas", pageLink: "blusas" },
  { pageTitle: "Camisetas", pageLink: "camisetas" },
  { pageTitle: "Camisas", pageLink: "camisas" },
  { pageTitle: "Shorts", pageLink: "shorts" },
];

const Sidebar = () => {
  return (
    <nav className="sidebar">
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
