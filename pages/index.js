import React from "react";
import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = (props) => {
  // const [loadedMeetups,setLoadedMeetups]=useState([])
  // useEffect(()=>{
  //   //send a http request and feth data

  //   setLoadedMeetups(DUMMY_MEETUPS)
  // },[])
  return <MeetupList meetups={props.meetups} />;
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

export async function getStaticProps(){
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;
