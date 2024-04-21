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
export async function getStaticPaths() {
  //fetch data for a single meetup
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
      {
        params: {
          meetupid: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data fro a single meetup
  const meetupId = context.params.meetupid;
  console.log("in getstaticprops|||", context, meetupId);
  return {
    props: {
      meetupDate: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "first meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
