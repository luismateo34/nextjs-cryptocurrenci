import { CardSection } from "@/app/localComponent/CardSection";
import { MainSection } from "@/app/localComponent/MainSection";
export default function Home() {
  return (
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
      <div className="snap-center ">
      <MainSection />
      </div>
      <div className="snap-center ">
      <CardSection  />
      </div>
    </main>
  );
}
