import React, { useRef } from "react";
import Note from "./Note";

function Background() {
  //to use refrence using useRef
  const ref = useRef(null);
  //object creating data
  const data = [
    {
      icon: true,
      title: "Today's work",
      text: `
            - Wake up @ 6
            - Exercise for 30 minutes
            - Prepare breakfast
            - Check emails
            - Complete project report
                  `,
      bottom: true,
      // notecolor:"green",
      day: "Monday",
      stars: 3,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
            - Wake up @ 6
            - Attend team meeting
            - client presentation
            - Review pull requests
            - Plan tasks for tomorrow
                  `,
      bottom: true,
      // notecolor:"green",
      day: "Tuesday",
      stars: 5,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
         - Wake up @ 6
         - Organize workspace
         - Respond emails
         - Debug the project code
         - Submit report
          `,
      bottom: true,
      // notecolor:"green",
      day: "Thirstday",
      stars: 5,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
            - Wake up @ 6
            - Research new technology
            - Prepare for presentation
            - Update weekly report
            - Plan weekend activities
                  `,
      bottom: true,
      // notecolor:"green",
      day: "Wednesday",
      stars: 4,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
          - Wake up @ 6
          - Finalize weekly tasks
          - Attend client meeting
          - Send summary emails
          - Relax with a movie
         `,
      bottom: true,
      // notecolor:"green",
      day: "Friday",
      stars: 4,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
            - Wake up @ 7
            - Clean the house
            - Grocery shopping
            - Visit a friend
            - Enjoy a hobby
                  `,
      bottom: true,
      // notecolor:"green",
      day: "Saturday",
      stars: 2,
    },
    {
      icon: true,
      title: "Today's work",
      text: `
         - Wake up @ 7
         - Morning walk in nature
         - Plan for upcoming week
         - Read a book 
         - Spend quality time with family
         `,
      bottom: true,
      // notecolor:"green",
      day: "Sunday",
      stars: 2,
    },
  ];
  return (
    <div class="bg" ref={ref}>
      <h1 class="bgtext">ToDo</h1>
      <div className="notebox">
        {data.map((item, index) => (
          <Note data={item} refrence={ref} /> //data's object passing in item
        ))}
      </div>
    </div>
  );
}

export default Background;
