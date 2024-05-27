"use client";
import loader from "./loader.module.css";
import { store } from "./storeLoader";
import { useEffect } from "react";

const Loader = () => {
  return (
    <section className="w-screen h-screen z-30 fixed top-0 backdrop-blur-sm bg-black/40 flex flex-col justify-center items-center">
      <span className="mb-3 text-yellow-300">loading...</span>
      <div className={`${loader.loader}`}></div>
    </section>
  );
};

export const LoaderComponent = () => {
  const { action, disable } = store((state) => state);
  useEffect(() => {
    () => {};
    return () => {
      disable();
    };
  }, []);
  return <>{action && <Loader />}</>;
};
