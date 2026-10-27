import React, { useState } from "react";
import Title from "../components/Title";
import Flex from "../components/Flex";
import Container from "../components/Container";
import CustomerReviewsCard from "../components/CustomerReviewsCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Schedule from "../components/Schedule";
import { useNavigate } from "react-router-dom";

const CustomerReviews = () => {

  let navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const customerReviews = [
    {
      name: "MD S joy",
      proff: "Founder and CEO green",
      rating: "5",
      des: "Working with Naiyoj Solutions was a great experience. They understood my requirements clearly and delivered a modern, user-friendly website on time. The communication was smooth, and the final result exceeded my expectations.",
    },
    {
      name: "MD S rana",
      proff: "Founder and CEO red",
      rating: "2",
      des: "Working with Naiyoj Solutions was a great experience. They understood my requirements clearly and delivered a modern, user-friendly website on time.",
    },
    {
      name: "MD S p",
      proff: "Founder and CEO blue",
      rating: "4",
      des: "Working with Naiyoj Solutions was a great experience. They understood my requirements clearly and delivered a modern, user-friendly website on time.",
    },
    {
      name: "Customer Four",
      proff: "Web Development Client",
      rating: "5",
      des: "The team delivered an excellent website. I am very happy with the quality and communication throughout the project.",
    },
    {
      name: "Customer Five",
      proff: "Software Development Client",
      rating: "4",
      des: "Great service and professional support. The final product met my expectations.",
    },
    {
      name: "Customer Six",
      proff: "Graphic Design Client",
      rating: "3",
      des: "Good experience working with the team. The design was delivered according to my requirements.",
    },
    {
      name: "Customer Five",
      proff: "Software Development Client",
      rating: "4",
      des: "Great service and professional support. The final product met my expectations.",
    },
    {
      name: "Customer Six",
      proff: "Graphic Design Client",
      rating: "3",
      des: "Good experience working with the team. The design was delivered according to my requirements.",
    },
    {
      name: "Customer Five",
      proff: "Software Development Client",
      rating: "4",
      des: "Great service and professional support. The final product met my expectations.",
    },
    {
      name: "Customer Six",
      proff: "Graphic Design Client",
      rating: "3",
      des: "Good experience working with the team. The design was delivered according to my requirements.",
    },
  ];

  // প্রতি slide-এ ৩টি করে card
  const cardsPerPage = 3;

  const reviewPages = [];

  for (let i = 0; i < customerReviews.length; i += cardsPerPage) {
    reviewPages.push(customerReviews.slice(i, i + cardsPerPage));
  }

  const totalPages = reviewPages.length;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="bg-gray-white py-45 overflow-hidden">
      <Title
        text="Our Satisfied Customer Feedback"
        className="w-560 leading-14 text-center mx-auto mb-45"
      />

      <Container>
        <div className="flex items-center gap-3">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous reviews"
            className="shrink-0 cursor-pointer text-5xl text-black/70 hover:text-red-500 duration-200"
          >
            <IoIosArrowBack />
          </button>

          {/* Slider Viewport */}
          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {reviewPages.map((page, index) => (
                <div
                  key={index}
                  className="flex min-w-full shrink-0 justify-around gap-4"
                >
                  {page.map((item, cardIndex) => (
                    <CustomerReviewsCard
                      key={`${item.name}-${cardIndex}`}
                      name={item.name}
                      proff={item.proff}
                      des={item.des}
                      rating={item.rating}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next reviews"
            className="shrink-0 cursor-pointer text-5xl text-black/70 hover:text-red-500 duration-200"
          >
            <IoIosArrowForward />
          </button>
        </div>

        <div className="flex justify-center mt-45">
          <Schedule
            text="Learn More"

            onClick={() => setTimeout(() => {
              navigate("/reviews")
            }, 150)}
            
            hover={true}
            className="bg-deep-blue border border-serviceborder! hover:border-red-500! mx-auto text-center"
          />
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
