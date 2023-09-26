import Image from "next/image";
import About from "./pages/about";
import Services from "./pages/services";
import Location from "./pages/location";
import Index from "./pages";

export default function Home() {
  return (
    <main>
      <Index />
      <About />
      {/* <Services /> */}
      {/* <Location /> */}
    </main>
  );
}
