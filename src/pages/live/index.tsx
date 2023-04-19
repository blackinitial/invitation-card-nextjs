import Navbar from "@/components/sections/navbar";
import data from '../../data.json';
import { useState } from "react";
import Header from "@/components/sections/header";
import Couple from "@/components/sections/couple";
import Events from "@/components/sections/events";
import Moment from "@/components/sections/moment";
import Location from "@/components/sections/location";
import Footer from "@/components/sections/footer";

export default function LivePage () {
  const [firstOpen, setFirstOpen] = useState(true);

  return (
    <main className="min-h-screen">
      <Navbar data={data.navbar} />
      <Header data={data.header} firstOpen={firstOpen} setFirstOpen={setFirstOpen} />

      {!firstOpen && (
        <>
          <Couple data={data.couple} />
          <Events data={data.events} />
          <Moment data={data.moment} />
          <Location data={data.location} />
          <Footer />
        </>
      )}
      
      {/* <h1>Live Page</h1> */}
    </main>
  )
}