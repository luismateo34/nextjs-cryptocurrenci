import { CardSection } from "@/app/localComponent/CardSection";
import { MainSection } from "@/app/localComponent/MainSection";
export default function Home() {
  return (
    <>
      <div className="md:snap-center ">
        <MainSection />
      </div>
      <div className="md:snap-center ">
        <CardSection />
      </div>
    </>
  );
}
