import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log(await response.text(),"|||")
      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
