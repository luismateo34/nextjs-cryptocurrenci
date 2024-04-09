export const Section = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className=" h-[calc(100vh-3rem)]  w-screen  flex flex-row items-center justify-around flex-wrap">
      {children}
    </section>
  );
};
