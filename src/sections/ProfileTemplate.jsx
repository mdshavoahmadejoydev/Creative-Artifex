import React from "react";
import { NavLink } from "react-router-dom";
import Flex from "../components/Flex";
import profileimg from "../assets/Bennermen.png"

const AccountSidebar = () => {
  const menuItems = [
    // { name: "Dashboard", path: "/account" },
    { name: "Your Orders", path: "/account/orders" },
    { name: "Settings", path: "/account/settings" },
    // { name: "Payment Methods", path: "/account/payment-methods" },
    { name: "Notifications", path: "/account/notifications" },
    { name: "Support", path: "/account/support" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="absolute top-[94px] right-0  w-[250px] shrink-0 rounded-2xl bg-EEEEEE border border-black/20 p-5 shadow-lg">
      {/* Profile */}
      <Flex className="flex flex-col items-center text-center">
        <div className="relative">
          <img
            src={profileimg}
            alt="Profile"
            className="w-19 h-19 rounded-full object-cover border-2 border-black/20"
          />

          <span className="absolute bottom-1 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-900">
          Md Shavo Ahmade Joy
        </h3>

        <p className="text-sm text-slate-500">joydev@example.com</p>
      </Flex>

      <div className="border-t border-gray-200 my-5"></div>

      {/* Menu */}
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/account"}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-red-50 text-red-500 border-l-4 border-red-500"
                  : "text-slate-800 hover:bg-gray-100 hover:text-red-500"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebar;
