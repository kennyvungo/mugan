import Image from "next/image";
import Header from "../components/header";
import Card from "@/components/card";
import panel1 from '../public/panel1.png'
import panel2 from '../public/panel2.png'
import panel3 from '../public/panel3.png'
import panel4 from '../public/panel4.png'
import panel5 from '../public/panel5.png'
export default function Home() {
  return (
    <main className="text-black overflow-y-auto h-screen w-screen flex flex-col items-center pb-28">
      <div className= "w-2/4 h-1/5 container-md">
      <Card image={panel1}/>
      <Card image={panel2}/>
      <Card image={panel3}/>
      <Card image={panel4}/>
      <Card image={panel5}/>
      </div>
    </main>
  );
}
