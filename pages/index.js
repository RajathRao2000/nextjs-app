import React, { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { useRouter } from "next/router";
import "dotenv/config";

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

async function getMeetups() {}
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  // try {
  const response = await fetch(process.env.LOCALBASE + "/api/get-meetups");

  const data = await response.json();
  // } catch (error) {
  //   console.log(error);
  // }

  const MEETUPS = data;
  console.log(MEETUPS);
  return {
    props: {
      meetups: MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
