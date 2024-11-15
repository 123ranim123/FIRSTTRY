import AvisUsers from "@/components/home/AvisUsers";
import GalerieSection from "@/components/home/GalerieSection";
import HeroSection from "@/components/home/HeroSection";
import Section3 from "@/components/home/Section3";
import WorkspaceSection from "@/components/home/WorkspaceSection";



export default function Home() {
  return (
    <>
      
      <main className="flex-grow flex flex-col justify-center items-center w-full">
      <HeroSection />
      <div className="p-10"></div>
      <WorkspaceSection/>
      <div className="p-20"></div>

      <Section3/>
     
      <div className="p-10"></div>

      <AvisUsers/>
      <div className="pb-[20px] "></div>
      <GalerieSection/>
<div className="p-10"></div>



      </main>
    </>
  );
}
