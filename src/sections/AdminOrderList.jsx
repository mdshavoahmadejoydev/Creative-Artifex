
import React, { useEffect, useRef, useState } from "react";
import {
  FiBox,
  FiEye,
  FiChevronDown,
  FiTrash2,
} from "react-icons/fi";

// Firebase
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
} from "firebase/database";

import { useNavigate } from "react-router-dom";

const AdminOrderList = () => {
  const navigate = useNavigate();

  const db = getDatabase();

  const [orders, setOrders] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [updatingOrderId, setUpdatingOrderId] = useState(null);
  const [deletingOrderId, setDeletingOrderId] = useState(null);

  const dropdownRef = useRef(null);

  // Fetch Orders from Firebase
  useEffect(() => {
    const orderRef = ref(db, "orderlist/");

    const unsubscribe = onValue(orderRef, (snapshot) => {
      const arr = [];

      snapshot.forEach((item) => {
        arr.unshift({
          ...item.val(),
          id: item.key,
        });
      });

      setOrders(arr);
    });

    return () => unsubscribe();
  }, [db]);


  // Close Dropdown on Outside Click and Scroll
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => {
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);


  // Status Options
  const statusOptions = ["Pending", "Accepted", "Completed"];


  // Status Color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-600";

      case "Accepted":
        return "bg-purple-100 text-purple-600";

      case "Completed":
        return "bg-green-100 text-green-600";

      default:
        return "bg-blue-100 text-blue-600";
    }
  };


  // Update Status in Firebase
  const handleStatusChange = async (orderId, newStatus) => {
    setOpenDropdown(null);
    setUpdatingOrderId(orderId);

    try {
      const orderStatusRef = ref(db, `orderlist/${orderId}`);

      await update(orderStatusRef, {
        status: newStatus,
      });
    } catch (error) {
      console.error("Status Update Error:", error);

      alert("Status update failed! Please try again.");
    } finally {
      setUpdatingOrderId(null);
    }
  };

  // Delete Order from Firebase
  // Delete Order from Firebase
  const handleDeleteOrder = async (orderId) => {
    setOpenDropdown(null);
    setDeletingOrderId(orderId);

    try {
      const orderRef = ref(db, `orderlist/${orderId}`);

      await remove(orderRef);
    } catch (error) {
      console.error("Order Delete Error:", error);
    } finally {
      setDeletingOrderId(null);
    }
  };

  // View Order
  const handleViewOrder = (order) => {
    navigate("/OrderPrintablePage", {
      state: { order },
    });
  };


  return (
    <div className="bg-white relative border border-gray-100 rounded-xl p-3 shadow-sm">

      {/* Heading */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">

          <FiBox className="text-2xl text-[#101b35]" />

          <h2 className="font-bold text-[15px] text-[#101b35]">
            Your Order List
          </h2>

        </div>
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
        <div className="h-[525px] overflow-y-scroll">

          {orders.map((order, index) => {

            const currentStatus = order.status || "Pending";

            const isOpen = openDropdown === order.id;

            const isUpdating = updatingOrderId === order.id;

            const isDeleting = deletingOrderId === order.id;

            const isProcessing = isUpdating || isDeleting;

            return (

              <div
                key={order.id}
                className="flex items-center border-b border-gray-100 text-[11px] text-[#17233d]"
              >

                {/* Number */}
                <div className="w-[6%] p-3 font-semibold">
                  {index + 1}
                </div>


                {/* Service */}
                <div className="w-[22.5%] p-3 whitespace-nowrap">
                  {order.serviceName}
                </div>


                {/* Package */}
                <div className="w-[14%] p-3">
                  {order.packageName}
                </div>


                {/* Amount */}
                <div className="w-[11.5%] p-3 font-medium">
                  {order.price} TK
                </div>


                {/* Status Dropdown */}
                <div className="w-[18%] p-3">

                  <div
                    ref={isOpen ? dropdownRef : null}
                    className="relative inline-block"
                  >

                    <button
                      type="button"
                      disabled={isProcessing}
                      onClick={() =>
                        setOpenDropdown(
                          isOpen ? null : order.id
                        )
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full font-semibold whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-wait ${getStatusColor(currentStatus)}`}
                    >

                      {isDeleting
                        ? "Deleting..."
                        : isUpdating
                          ? "Updating..."
                          : currentStatus}

                      <FiChevronDown
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />

                    </button>


                    {/* Dropdown Menu */}
                    {isOpen && (

                      <div className="absolute top-[42px] left-0 w-[130px] bg-white border border-gray-100 rounded-lg shadow-lg z-50 overflow-hidden">

                        {/* Status Options */}
                        {statusOptions.map((status) => (

                          <button
                            key={status}
                            type="button"
                            disabled={isProcessing}
                            onClick={() =>
                              handleStatusChange(order.id, status)
                            }
                            className={`block w-full text-left px-3 py-2 font-semibold cursor-pointer hover:bg-gray-100 disabled:opacity-50 ${
                              status === currentStatus
                                ? "bg-gray-50"
                                : ""
                            }`}
                          >

                            <span
                              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                status === "Pending"
                                  ? "bg-blue-500"
                                  : status === "Accepted"
                                    ? "bg-purple-500"
                                    : "bg-green-500"
                              }`}
                            />

                            {status}

                          </button>

                        ))}


                        {/* Divider */}
                        <div className="border-t border-gray-100" />


                        {/* Delete Button */}
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() =>
                            handleDeleteOrder(order.id)
                          }
                          className="flex items-center gap-2 w-full text-left px-3 py-2 font-semibold text-red-500 hover:bg-red-50 cursor-pointer disabled:opacity-50"
                        >

                          <FiTrash2 className="text-sm" />

                          Delete

                        </button>

                      </div>

                    )}

                  </div>

                </div>


                {/* Date */}
                <div className="w-[15%] p-3">

                  {order.timezoon
                    ? new Date(
                        order.timezoon.year,
                        order.timezoon.month,
                        order.timezoon.date
                      ).toLocaleDateString("en-GB")
                    : "N/A"}

                </div>


                {/* View Button */}
                <div className="w-[13%] p-3">

                  <button
                    type="button"
                    onClick={() => handleViewOrder(order)}
                    className="flex items-center gap-1 cursor-pointer border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
                  >

                    <FiEye />

                    View

                  </button>

                </div>

              </div>

            );

          })}


          {/* Empty Orders */}
          {orders.length === 0 && (

            <div className="text-center py-10 text-gray-400 text-sm">
              No Orders Found
            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default AdminOrderList;
