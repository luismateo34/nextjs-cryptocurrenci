import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const GraficCircule = ({
  porcentaje,
  title,
  className,
}: {
  porcentaje: number;
  title?: string;
  className?: string;
}) => {
  const value = porcentaje >= 0 ? porcentaje : porcentaje * -1;
  return (
    <Card className={`w-52 h-72 flex flex-col justify-around items-center gap-2 bg-blue-900 text-orange-500 ${className}`}>
      <CardHeader className="w-full flex flex-col justify-center items-center mb-3">
        <div className="flex flex-col justify-center w-full h-6">
          {title !== undefined && (
            <div className="flex flex-row justify-center items-center">
              <h2 >{title}</h2>
            </div>
          )}
          <h2 className="mx-auto">change % 24hs</h2>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 justify-items-center content-center w-44 h-44  mb-6">
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
        <div className=" justify-self-center col-start-1 col-end-2 row-start-1 row-end-2 w-44 h-44  flex flex-col justify-center items-center">
          <div>{porcentaje.toFixed(2)} %</div>
        </div>
      </CardContent>
    </Card>
  );
};
