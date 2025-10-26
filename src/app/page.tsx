import { CardSection } from "@/app/localComponent/CardSection";
import { MainSection } from "@/app/localComponent/MainSection";
import style from "./app.module.css"

export default function Home() {
  return (
    <>
      {/*
      <div classcame="md:snap-center ">
      */}
      <div className={style.mediaMd}>
        <MainSection />
      </div>
      <div className={style.mediaMd}>
        <CardSection />
      </div>
    </>
  );
}
