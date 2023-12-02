import { Link, useLocation } from "react-router-dom";

const NAVS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shopping",
    label: "Shopping",
  },
  {
    href: "/modal",
    label: "Modal",
  },
  {
    href: "/tab",
    label: "Tab",
  },
  {
    href: "/form",
    label: "Form",
  },
  {
    href: "/accordion",
    label: "Accordion",
  },
  {
    href: "/payment",
    label: "Payment",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <nav>
        <ul className="flex gap-2">
          {NAVS.map((nav, index) => (
            <Link to={nav.href}>
              <li
                key={index}
                className={`p-[10px] ${
                  pathname === nav.href
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {nav.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
