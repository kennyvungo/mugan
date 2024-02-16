
import Card from "@/components/card";
export default function Home() {
  let panels = [1,2,3,4,5]
  
  return (
    <>
    <span className="h-custom"></span>
    <main className="text-black overflow-y-auto h-screen w-screen flex flex-col items-center pb-28">
      <div className= "w-3/5 h-1/5 container-md">
        {panels.map((num)=> <Card key={num} imageNum={num} /> )}
      </div>
    </main>
    </>
  );
}
