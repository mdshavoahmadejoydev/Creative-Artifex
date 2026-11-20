import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// firebase s
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
// firebase e

import { activeuser } from "../../slices/activeUserSlice";
import Image from "../components/Image";

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
import { FaSpinner } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { MdOutlinePhotoCamera } from "react-icons/md";

const Dashboard = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const pathname = location.pathname;
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const activeUserRedux = useSelector((state) => state.activeuser.value);
  // console.log(activeUserRedux.photoURL);

  // firebase read operation s
  const db = getDatabase();

  const [alluser, setAlluser] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "alluser/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (activeUserRedux.uid == item.val().uid) {
          arr.push(item.val());
        }
      });
      setAlluser(arr);
    });
  }, []);
  // console.log(alluser);

    // firebase orders read operation code s
    const [orders, setOrders] = useState([]);
    // console.log(orders)
  
    useEffect(() => {
      const starCountRef = ref(db, "orderlist/");
      onValue(starCountRef, (snapshot) => {
        let arr = [];
        snapshot.forEach((item) => {
          activeUserRedux.uid == item.val().uid && arr.unshift(item.val());
        });
        setOrders(arr);
      });
    }, []);
    // firebase code e

  // firebase orders read operation e

  useEffect(() => {
    activeUserRedux == null && navigate("/");
  }, []);

  // console.log(pathname.includes("orderlist"))

  // const location = useLocation();
  // const pathname = location.pathname;
  let itemname = pathname.split("/").at(-1);

  const [activeMenu, setActiveMenu] = useState(itemname);

  useEffect(() => {
    setActiveMenu(itemname);
  }, [pathname]);

  const menuItems = [
    {
      name: "Dashboard",
      key: "deshboard",
      icon: <FiHome />,
      path: "/deshboard",
    },
    {
      name: "Your Order List",
      key: "orderlist",
      icon: <FiBox />,
      path: "/deshboard/orderlist",
    },
    {
      name: "Settings",
      key: "Setting",
      icon: <FiSettings />,
      path: "/deshboard/Setting",
    },
    {
      name: "Notifications",
      key: "Notifications",
      icon: <FiBell />,
      path: "/deshboard/Notifications",
      notification: true,
    },
    {
      name: "Support",
      key: "support",
      icon: <FiHeadphones />,
      path: "/deshboard/support",
    },
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
      value: orders.length,
      // value: orders.length,
      icon: <FiShoppingCart />,
      bg: "bg-red-100",
      color: "text-red-500",
    },
    {
      title: "Completed",
      value: orders.filter((order) => order.status == "Completed").length,
      icon: <FiCheckCircle />,
      bg: "bg-emerald-100",
      color: "text-emerald-500",
    },
    {
      title: "Working Project",
      value: orders.filter((order) => order.status=="Accepted").length,
      icon: <FaSpinner />,
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      title: "Pending",
      value: orders.filter((order) => order.status == "Pending").length,
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
    <div className="bg-[#f7f8fc] p-3 mt-94">
      <div className="flex flex-col lg:flex-row gap-4 max-w-[1500px] mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0 bg-white rounded-2xl border border-gray-200 p-4">
          {/* Profile */}
          {alluser.map((item) => (
            <div className="flex flex-col items-center border-b border-gray-100 pb-5">
              <div className="relative">
                <div className="w-[100px] h-[100px]  rounded-full border-[5px] border-black/50">

                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 group duration-200 rounded-full cursor-pointer">
                    <MdOutlinePhotoCamera className="absolute top-1/2 left-1/2 -translate-1/2 text-3xl text-transparent group-hover:text-white duration-200" />
                  </div>

                  <Image
                    src={item.profilepick}
                    alt={`profile`}
                    className={`w-full h-full object-cover rounded-full`}
                  />
                </div>

                {/* <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span> */}
              </div>

              <h3 className="font-bold font-roboto text-xl text-[#101b35] mt-2">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500">{item.email}</p>
            </div>
          ))}

          {/* Menu */}
          <nav className="mt-3 flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => handleMenuClick(item)}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-lg text-[13px] font-medium transition-all cursor-pointer
                ${
                  activeMenu === item.key
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

              <Link to={"/contact"} className="bg-teal-700 text-white text-[10px] px-3 py-1 rounded-full mt-2">
                Contact Us →
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 flex flex-col gap-3">
          {/* Welcome Banner */}
          {pathname == "/deshboard" && (
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#004d4b] via-[#00645c] to-[#003d43] px-5 py-6 min-h-[90px] flex items-center justify-between">
              <div className="relative z-10">
                <h1 className="text-white text-xl sm:text-2xl font-bold">
                  Welcome Back! 👋
                </h1>

                <p className="text-gray-200 text-sm mt-1">
                  Here's your account overview.
                </p>
              </div>

              {/* <button className="absolute top-0 right-0 bg-white rounded-bl-lg p-2 text-gray-700">
              <FiX />
            </button> */}
            </div>
          )}
          {/* Statistics Cards */}
          {pathname == "/deshboard/orderlist" && (
            <div className="flex flex-wrap gap-3">
              {statistics.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[140px] bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm"
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
          )}
          <Outlet /> {/* for other pages */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
