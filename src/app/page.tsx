import Doctors from "./component/Doctors";
import Specialties from "./component/Specialties";
import ImageSlider from "./component/ImageSlider";
import React from "react";
import Insurance from "./component/Insurance";
// import AppointmentButton from "./component/Appoinment";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Insurance/>
      <Specialties />
      <Doctors />
      {/* <AppointmentButton /> */}
    </>
  );
}
