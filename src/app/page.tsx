import Appointments from "./components/Appointments";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Specialties from "./components/Specialties";

export default function Home() {
  return (
    <>
      <Specialties />
      <Appointments />
      <Doctors />
      <Footer />
    </>
  );
}
