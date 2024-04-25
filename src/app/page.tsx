import { CardSection } from "@/app/localComponent/CardSection";
import { MainSection } from "@/app/localComponent/MainSection";
export default function Home() {
  return (
    <>
      <div className="snap-center ">
        <MainSection />
      </div>
      <div className="snap-center ">
        <CardSection />
      </div>
    </>
  );
}
