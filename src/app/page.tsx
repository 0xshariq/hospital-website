import Appointments from "./component/Appointments";
import Doctors from "./component/Doctors";
import Specialties from "./component/Specialties";
import ImageSlider from "./component/ImageSlider";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Specialties />
      <Doctors />
      <Appointments />
    </>
  );
}
