export const MoreData = ({
  high_24h,
  low_24h,
  market_cap_rank,
  market_cap_change_percentage_24h,
}: {
  high_24h: number;
  low_24h: number;
  market_cap_rank: number;
  market_cap_change_percentage_24h: number;
}) => {
  return (
    <div className="w-full flex flex-row justify-between gap-1 relative ">
      <div className=" w-full flex flex-row justify-between gap-1 z-10 absolute ">
        <details className="z-10 w-full  flex flex-col items-center">
          <summary className="w-full bg-gray-300 rounded-sm text-blue-950 font-semibold text-base px-4">
            More data
          </summary>
          <section className=" w-full flex flex-col justify-around items-center text-amber-300  bg-black/65 backdrop-blur-sm rounded-md">
            <div> high_24: {high_24h}</div>
            <div> low_24: {low_24h}</div>
            <div> ranking : {market_cap_rank}</div>
            <div>marketcap change:</div>
            <div className="text-red-600">
              {market_cap_change_percentage_24h}
            </div>
          </section>
        </details>
      </div>
    </div>
  );
};
