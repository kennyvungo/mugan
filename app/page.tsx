import Image from "next/image";
import Header from "../components/header";
import Card from "@/components/card";
import panel from '../public/panel1.png'
export default function Home() {
  return (
    <main className="text-black overflow-y-auto h-screen w-screen flex flex-col items-center pb-28">
      <div className= "w-2/4">
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
      <Card image={panel}/>
    
      </div>
    </main>
  );
}
