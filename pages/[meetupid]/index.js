import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDate.title}</title>
        <meta name="description" content={props.meetupDate.description} />
      </Head>
      <MeetupDetail
        image={props.meetupDate.image}
        title={props.meetupDate.title}
        address={props.meetupDate.address}
        description={props.meetupDate.description}
      />
    </Fragment>
  );
};
export async function getStaticPaths() {
  //fetch data for a single meetup

  const uri =
    "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/meetups?retryWrites=true&w=majority&appName=cluster0";
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log("meetups:::", meetups);
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data fro a single meetup

  const meetupId = context.params.meetupid;
  console.log(meetupId, ":::meetupId");

  const uri =
    "mongodb+srv://user:user@cluster0.z25nbll.mongodb.net/meetups?retryWrites=true&w=majority&appName=cluster0";
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  // const selectedMeetup = await meetupsCollection.findOne();
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // console.log("meetups:::",meetups)

  client.close();

  return {
    props: {
      meetupDate: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
