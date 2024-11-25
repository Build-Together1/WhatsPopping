import Event1 from "../assets/images/Rectangle 57.png";
import Event2 from "../assets/images/Rectangle 58.png";
import Event3 from "../assets/images/Rectangle 59.png";
import Event4 from "../assets/images/Rectangle 60.png";

export const paidEvents = [
  {
    image: Event1,
    title: "Masquerade Carnival",
    location: "Viva club, Abia",
    date: "12th July, 2023 | 01:00pm",
  },
  {
    image: Event2,
    title: "Fashion Runway",
    location: "Eko Hotel, Lagos",
    date: "20th August, 2023 | 12:00pm",
  },
  {
    image: Event3,
    title: "Food Festival",
    location: "TBS, Lagos",
    date: "10th September, 2023 | 10:00am",
  },
  {
    image: Event4,
    title: "Music Concert",
    location: "O2 Arena, London",
    date: "15th October, 2023 | 06:00pm",
  },
  {
    image: Event1,
    title: "Masquerade Carnival",
    location: "Viva club, Abia",
    date: "12th July, 2023 | 01:00pm",
  },
  {
    image: Event2,
    title: "Fashion Runway",
    location: "Eko Hotel, Lagos",
    date: "20th August, 2023 | 12:00pm",
  },
  {
    image: Event3,
    title: "Food Festival",
    location: "TBS, Lagos",
    date: "10th September, 2023 | 10:00am",
  },
  {
    image: Event4,
    title: "Music Concert",
    location: "O2 Arena, London",
    date: "15th October, 2023 | 06:00pm",
  },
];

export const freeEvents = [
  {
    image: Event1,
    title: "Community Gathering",
    location: "Community Center, Abia",
    date: "5th June, 2023 | 10:00am",
  },
  {
    image: Event2,
    title: "Art Exhibition",
    location: "Art Gallery, Lagos",
    date: "15th June, 2023 | 11:00am",
  },
  {
    image: Event1,
    title: "Community Gathering",
    location: "Community Center, Abia",
    date: "5th June, 2023 | 10:00am",
  },
  {
    image: Event2,
    title: "Art Exhibition",
    location: "Art Gallery, Lagos",
    date: "15th June, 2023 | 11:00am",
  },
];

export const forYouEvents = [
  {
    image: Event3,
    title: "Cooking Class",
    location: "Cooking Studio, Lagos",
    date: "25th July, 2023 | 02:00pm",
  },
  {
    image: Event4,
    title: "Yoga Workshop",
    location: "Wellness Center, London",
    date: "30th July, 2023 | 09:00am",
  },
  {
    image: Event3,
    title: "Cooking Class",
    location: "Cooking Studio, Lagos",
    date: "25th July, 2023 | 02:00pm",
  },
  {
    image: Event4,
    title: "Yoga Workshop",
    location: "Wellness Center, London",
    date: "30th July, 2023 | 09:00am",
  },
];

export const getEvents = (category) => {
  if (category === "paid") {
    return paidEvents;
  } else if (category === "free") {
    return freeEvents;
  } else {
    return forYouEvents;
  }
};
