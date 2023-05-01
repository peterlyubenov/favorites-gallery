import React from "react";
import { NAVBAR_ITEMS } from "../config/navbar";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../config/routes";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center py-4 px-8">
        <h1 className="font-bold">
          <Link to={HOME_ROUTE}>LogoIpsum</Link>
        </h1>
        <nav>
          <ul className="flex">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.name} className="mx-2">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="mx-auto w-full px-8 lg:w-9/12">{children}</div>
    </div>
  );
};
