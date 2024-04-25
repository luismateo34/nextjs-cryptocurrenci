import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const GraficCircule = ({ porcentaje }: { porcentaje: number }) => {
  const value = porcentaje >= 0 ? porcentaje : porcentaje * -1;
  return (
    <Card className="w-52 h-60 flex flex-col justify-center items-center gap-2 bg-cyan-600 text-orange-500 ">
      <CardHeader className="w-full flex flex-row justify-center items-center">
        <CardTitle>change % 24hs</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <div className="grid grid-col-1  w-44 h-44 relative ">
          <svg className="col-start-1 col-end-2 row-start-1 row-end-2 w-44 h-44 flex flex-col justify-center items-center ">
            <circle
              r="82"
              cx="50%"
              cy="50%"
              pathLength={"100"}
              strokeDasharray={100}
              className="fill-none stroke-amber-200 stroke-[12px] -rotate-90 origin-center  "
            />
          </svg>
          <svg className="col-start-1 col-end-2 row-start-1 row-end-2 w-44 h-44 flex flex-col justify-center items-center">
            <circle
              r="82"
              cx="50%"
              cy="50%"
              pathLength={"100"}
              strokeDasharray={` ${value} 100 `}
              className={`fill-none ${
                porcentaje >= 0 ? "stroke-blue-500" : "stroke-red-700"
              } stroke-[12px] -rotate-90 origin-center`}
            />
          </svg>
          <div className="absolute top-[45%] w-full flex flex-row justify-center items-center">
            <div>{porcentaje.toFixed(2)} %</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
