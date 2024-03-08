
import Card from "@/components/card";
import Footer from "@/components/footer";
export default function Home() {
  let panels = [1,2,3,4,5,6]
  
  return (
    <>
    <main className="overflow-y-auto h-screen w-screen flex mt-12 flex-col items-center">
      <div className= "w-3/5 container-md sm:w-4/5 pb-24 sm:pb-12">
        {panels.map((num)=> <Card key={num} imageNum={num} /> )}
      </div>
      <Footer/>
    </main> 

    </>
  );
}
