import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some Address 5, 12345 some city",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some Address 10, 12345 some city",
      description: "This is a second meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
