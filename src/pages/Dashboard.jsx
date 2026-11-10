import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";


import { activeuser } from "../../slices/activeUserSlice";

import {
  FiShoppingCart,
  FiCheckCircle,
  FiClock,
  FiStar,
  FiHome,
  FiBox,
  FiSettings,
  FiCreditCard,
  FiBell,
  FiHeadphones,
  FiLogOut,
  FiEye,
  FiX,
} from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const activeUserRedux = useSelector((state) => state.activeuser.value);
  // console.log(activeUserRedux);

  useEffect(() => {
    activeUserRedux == null && navigate("/");
  }, []);

  const [activeMenu, setActiveMenu] = useState("Your Order List");

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/deshboard" },
    { name: "Your Order List", icon: <FiBox />, path: "/deshboard/orderlist" },
    { name: "Settings", icon: <FiSettings />, path: "/deshboard/Setting" },
    {
      name: "Notifications",
      icon: <FiBell />,
      path: "/deshboard/Notifications",
      notification: true,
    },
    { name: "Support", icon: <FiHeadphones />, path: "/deshboard/support" },
    { name: "Logout", icon: <FiLogOut /> },
  ];



  const dispatch = useDispatch();
  const auth = getAuth();
 const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("logout");

      localStorage.removeItem("activeuser");

      dispatch(activeuser(null));

      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

  const handleMenuClick = (item) => {
  if (item.name === "Logout") {
    handleLogout();
  } else {
    setActiveMenu(item.name);
  }
};



  const statistics = [
    {
      title: "Total Orders",
      value: "3",
      icon: <FiShoppingCart />,
      bg: "bg-red-100",
      color: "text-red-500",
    },
    {
      title: "Completed",
      value: "2",
      icon: <FiCheckCircle />,
      bg: "bg-emerald-100",
      color: "text-emerald-500",
    },
    {
      title: "Pending",
      value: "1",
      icon: <FiClock />,
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
    {
      title: "Your Rating",
      value: "5.0",
      icon: <FiStar />,
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] p-3 mt-94">
      <div className="flex flex-col lg:flex-row gap-4 max-w-[1500px] mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0 bg-white rounded-2xl border border-gray-200 p-4">
          {/* Profile */}
          <div className="flex flex-col items-center border-b border-gray-100 pb-5">
            <div className="relative">
              <div className="w-[100px] h-[100px] rounded-full border-[5px] border-[#e7f5f3] p-1">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <h3 className="font-bold text-[14px] text-[#101b35] mt-3">
              Md Shavo Ahmade Joy
            </h3>

            <p className="text-xs text-gray-500 mt-1">joydev@example.com</p>
          </div>

          {/* Menu */}
          <nav className="mt-3 flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => handleMenuClick(item)}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-lg text-[13px] font-medium transition-all cursor-pointer
                ${
                  activeMenu === item.name
                    ? "bg-[#fff0f1] text-red-500 border-l-4 border-red-500"
                    : "text-[#17233d] hover:bg-gray-50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>

                <span>{item.name}</span>

                {item.notification && (
                  <span className="ml-auto bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-[11px]">
                    3
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Help Card */}
          <div className="mt-4 bg-[#d9f8ef] rounded-xl p-3 flex gap-2 items-start">
            <FiHeadphones className="text-2xl text-teal-800 shrink-0" />

            <div>
              <h4 className="text-xs font-bold text-gray-800">Need Help?</h4>

              <p className="text-[10px] text-gray-600 mt-1">
                Our support team is here for you 24/7.
              </p>

              <button className="bg-teal-700 text-white text-[10px] px-3 py-1 rounded-full mt-2">
                Contact Us →
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col gap-3">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#004d4b] via-[#00645c] to-[#003d43] px-5 py-6 min-h-[90px] flex items-center justify-between">
            <div className="relative z-10">
              <h1 className="text-white text-xl sm:text-2xl font-bold">
                Welcome Back! 👋
              </h1>

              <p className="text-gray-200 text-sm mt-1">
                Here's your account overview.
              </p>
            </div>

            <button className="absolute top-0 right-0 bg-white rounded-bl-lg p-2 text-gray-700">
              <FiX />
            </button>
          </div>
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {statistics.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm"
              >
                <div
                  className={`${item.bg} ${item.color} w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#101b35]">
                    {item.value}
                  </h3>

                  <p className="text-[11px] text-gray-600 whitespace-nowrap">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Outlet /> {/* for other pages */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
