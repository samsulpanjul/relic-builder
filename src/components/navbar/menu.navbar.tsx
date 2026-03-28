import Link from "next/link";

const MENU_LIST = [
  {
    href: "/",
    label: "Character",
  },
  {
    href: "/relic",
    label: "Relic Store",
  },
  {
    href: "/import",
    label: "Import",
  },
  {
    href: "/export",
    label: "Export",
  },
];

const MenuNavbar = () => {
  return (
    <div className="wrapper bg-background text-foreground px-8 py-4 rounded-full mt-4 mb-2 flex items-center gap-4">
      {MENU_LIST.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuNavbar;
