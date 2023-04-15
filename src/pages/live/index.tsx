import Navbar from "@/components/sections/navbar";
import data from '../../data.json';
import { useState } from "react";
import Header from "@/components/sections/header";

export default function LivePage () {
  const [firstOpen, setFirstOpen] = useState(true);

  return (
    <main className="min-h-screen font-sans">
      <Navbar data={data.navbar} />
      <Header data={data.header} firstOpen={firstOpen} setFirstOpen={setFirstOpen} />
      
      {/* <h1>Live Page</h1> */}
    </main>
  )
}