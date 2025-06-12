import { Card, CardHeader, CardContent } from "@/components/ui/card";
import style from "./graficCircule.module.css";


export const GraficCircule = ({
  porcentaje,
  title,
  className,
}: {
  porcentaje: number;
  title?: string ;
  className?: string;
}) => {
  const value = porcentaje >= 0 ? porcentaje : porcentaje * -1;
  return (
    <Card className={` w-48 lg:w-52 ${style.Card} ${className}`}>
      <CardHeader className="w-full flex flex-col justify-center items-center mb-3">
        <div className="flex flex-col justify-center w-full h-6">
          {title !== undefined && (
            <div className="flex flex-row justify-center items-center">
              <h3>{title}</h3>
            </div>
          )}
          <h3 className="mx-auto">change % 24hs</h3>
        </div>
      </CardHeader>
      <CardContent className={style.CardContent}>
        <svg className={style.svg}>
          <circle
            r="82"
            cx="50%"
            cy="50%"
            pathLength={"100"}
            strokeDasharray={100}
            className="fill-none stroke-amber-200 stroke-[12px] -rotate-90 origin-center  "
          />
        </svg>
        <svg className={style.svg}>
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
        <div className={style.porcentaje}>
          <div>{porcentaje.toFixed(2)} %</div>
        </div>
      </CardContent>
    </Card>
  );
};
