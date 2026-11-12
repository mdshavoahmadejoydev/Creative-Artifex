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


  const orders = [
    {
      id: 1,
      service: "Website Development",
      package: "Standard",
      amount: "$500",
      status: "Completed",
      date: "Oct 28, 2025",
    }
  ];

const OrderList = () => {
  return (
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
                className="border-b border-gray-100 text-[11px] text-[#17233d]"
              >
                <td className="p-3 font-semibold">{`1`}</td>

                <td className="p-3 whitespace-nowrap">graphic design</td>

                <td className="p-3">{`basic`}</td>

                <td className="p-3 font-medium">{`500`}</td>

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

                <td className="p-3 whitespace-nowrap">{`12/5/2004`}</td>

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
  );
};

export default OrderList;
