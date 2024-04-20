import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg`}
      title={`first meetup`}
      address={"Some Street 5, Some City"}
      description={"This is a first meetup"}
    />
  );
};

export default MeetupDetails;
