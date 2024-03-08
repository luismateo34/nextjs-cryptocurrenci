import loader from "./loader.module.css";

export default function Loading() {
  return (
    <main className=" h-screen w-screen  flex flex-col items-center justify-around ">
      <span className="font-semibold text-amber-400">Loading...</span>
      <div className={loader.loader}></div>
    </main>
  );
}
