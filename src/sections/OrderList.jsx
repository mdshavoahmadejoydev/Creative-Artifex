import React, { useEffect, useState } from "react";
import { FiBox, FiEye } from "react-icons/fi";

// firebase code s
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
// import { activeuser } from "../../slices/activeUserSlice";
// firebase code e

// const orders = [
//   {
//     id: 1,
//     service: "Website Development",
//     package: "Standard",
//     amount: "$500",
//     status: "Completed",
//     date: "Oct 28, 2025",
//   },
// ];

const OrderList = () => {

  const activeUserRedux = useSelector((state) => state.activeuser.value);
  // console.log(activeUserRedux.email)

  // firebase code s
  const db = getDatabase();
  const [orders, setOrders] = useState([]);
  // console.log(orders)

  useEffect(() => {
    const starCountRef = ref(db, "orderlist/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        activeUserRedux.uid == item.val().uid && arr.push(item.val());
      });
      setOrders(arr);
    });
  }, []);
  // firebase code e


  // view order button

  let handleViewOrder = (order) => {
    console.log(order)
  }

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

        {/* <button className="border border-red-500 text-red-500 text-xs px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition-all">
          View All →
        </button> */}
      </div>

      {/* Order Header */}
      <div className="min-w-[650px]">
        <div className="flex items-center bg-[#f0f2f6] rounded-lg text-[11px] text-[#263653] font-semibold">
          <div className="w-[6%] p-3">#</div>
          <div className="w-[22%] p-3">Service</div>
          <div className="w-[14%] p-3">Package</div>
          <div className="w-[12%] p-3">Amount</div>
          <div className="w-[16%] p-3">Status</div>
          <div className="w-[17%] p-3">Date</div>
          <div className="w-[13%] p-3">Action</div>
        </div>

        {/* Order Items */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex items-center border-b border-gray-100 text-[11px] text-[#17233d]"
          >
            <div className="w-[6%] p-3 font-semibold">{index + 1}</div>

            <div className="w-[22%] p-3 whitespace-nowrap">
              {order.serviceName}
            </div>

            <div className="w-[14%] p-3">{order.packageName}</div>

            <div className="w-[12%] p-3 font-medium">{order.price}</div>

            <div className="w-[16%] p-3">
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
                {`pending`}
              </span>
            </div>

            <div className="w-[17%] p-3 whitespace-nowrap">{`${order.timezoon.date} / ${order.timezoon.month} / ${order.timezoon.year}`}</div>

            <div className="w-[13%] p-3">
              <button
                onClick={() => handleViewOrder(order)}
                className="flex items-center gap-1 cursor-pointer border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
              >
                <FiEye />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
