import Appointments from "./components/Appointments";
import Doctors from "./components/Doctors";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Appointments />
      <Doctors />
    </>
  );
}
