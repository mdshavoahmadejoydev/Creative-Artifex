import React from 'react'
import SubmitMsg from '../sections/SubmitMsg'
import ReviewsPageTitle from '../components/ReviewsPageTitle';
import P from '../components/P';

const Contact = () => {
  return (
    <section>
      <div className="h-94"></div>
      <div className="bg-seagreen">
        <ReviewsPageTitle
          text={"<< Discuss Your Project >>"}
          className={`pt-4 text-center`}
        />

        <P
          text={`Tell us about your project requirements, and we’ll get in touch with you soon to discuss your ideas and find the best solution for your needs.`}
          className={`text-white w-4xl text-center mx-auto `}
        />
      </div>
      <SubmitMsg />
    </section>
  );
}

export default Contact