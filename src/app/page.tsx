import Appointments from "./components/Appointments";
import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Appointments />
      <Doctors />
      <Footer />
    </>
  );
}
