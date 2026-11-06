import React from "react";
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

const Dashboard = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, active: true },
    { name: "Your Order List", icon: <FiBox /> },
    { name: "Settings", icon: <FiSettings /> },
    { name: "Payment Methods", icon: <FiCreditCard /> },
    { name: "Notifications", icon: <FiBell />, notification: true },
    { name: "Support", icon: <FiHeadphones /> },
    { name: "Logout", icon: <FiLogOut /> },
  ];

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

  const orders = [
    {
      id: 1,
      service: "Website Development",
      package: "Standard",
      amount: "$500",
      status: "Completed",
      date: "Oct 28, 2025",
    },
    {
      id: 2,
      service: "Graphic Design",
      package: "Basic",
      amount: "$150",
      status: "Pending",
      date: "Nov 02, 2025",
    },
    {
      id: 3,
      service: "Software Development",
      package: "Premium",
      amount: "$800",
      status: "Processing",
      date: "Nov 04, 2025",
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
              <button
                key={index}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-lg text-[13px] font-medium transition-all
                ${
                  item.active
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
              </button>
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

            <div className="text-white/30 text-4xl font-bold italic">CA</div>

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

          {/* Order List */}
          <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
            {/* Heading */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <FiBox className="text-2xl text-[#101b35]" />

                <h2 className="font-bold text-[15px] text-[#101b35]">
                  Your Order List
                </h2>
              </div>

              <button className="border border-red-500 text-red-500 text-xs px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition-all">
                View All →
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="bg-[#f0f2f6] text-[11px] text-[#263653]">
                    <th className="p-3 rounded-tl-lg">#</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Package</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 rounded-tr-lg">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 text-[11px] text-[#17233d]"
                    >
                      <td className="p-3 font-semibold">{order.id}</td>

                      <td className="p-3 whitespace-nowrap">{order.service}</td>

                      <td className="p-3">{order.package}</td>

                      <td className="p-3 font-medium">{order.amount}</td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap
                          ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-600"
                              : order.status === "Pending"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="p-3 whitespace-nowrap">{order.date}</td>

                      <td className="p-3">
                        <button className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100">
                          <FiEye />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
