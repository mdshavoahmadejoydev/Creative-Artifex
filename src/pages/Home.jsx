import React, { useEffect, useState } from "react";
import Herro from "../sections/Herro";
import WorkingWith from "../sections/WorkingWith";
import Experieance from "../sections/Experieance";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import CustomerReviews from "../sections/CustomerReviews";
import Teamexperts from "../sections/Teamexperts";
import Faq from "../sections/Faq";
import TeamMember from "../sections/TeamMember";
import SubmitMsg from "../sections/SubmitMsg";

import ScheduleButton from "../sections/ScheduleButton";
import LiveMessage from "../components/LiveMessage";

const Home = () => {
  const [showScheduleBox, setShowScheduleBox] = useState(false);
  // find item on search input
  const handleMeetingTime = () => {
    setTimeout(() => {
      setShowScheduleBox(!showScheduleBox);   
    }, 150);
  };

  // schedule meeting button function



  return (
    <>
      <Herro onScheduleClick={handleMeetingTime} />
      <WorkingWith />
      <Experieance onScheduleClick={handleMeetingTime} />
      <Services />
      <Portfolio />
      <CustomerReviews />
      <Teamexperts />
      <Faq />
      <TeamMember />
      <SubmitMsg />
      {showScheduleBox && <ScheduleButton onScheduleClick={handleMeetingTime}/>}
    </>
  );
};

export default Home;
