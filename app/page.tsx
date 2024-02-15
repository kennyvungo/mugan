import Image from "next/image";
import Header from "../components/header";
import Card from "@/components/card";
export default function Home() {
  return (
    <main className="text-black overflow-y-auto h-screen w-screen flex flex-col items-center">
      <div className="bg-slate-300 w-2/4">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </main>
  );
}
