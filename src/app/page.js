import BentoColumns from "@/components/BentoColumns/BentoColumns";
import Layout from "@/components/Loyaout";


export default function Home() {
  return (
    <div className="h-screen w-full pb-24">
      <BentoColumns></BentoColumns>
      <span className="font-bold w-full ">Este es el home</span>
    </div>
  );
}
