import Image from "next/image";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Location from "./pages/Location";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Services />
      <Location />
    </main>
  );
}
