"use client";
import { useSelectDay } from "./useSelectDay";

const intervalday = ["7", "14", "21", "30", "60", "90", "180", "365"];
/*
 * Element to select the day range
 */

export const SelectDay = () => {
  const { handelChange, value } = useSelectDay();
  return (
    <label>
      select day
      <select
        value={value !== null ? value : "30"}
        onChange={(e) => {
          handelChange(e.target.value);
        }}
        className="w-44 h-5 block text-black bg-orange-400 rounded-sm"
      >
        <option disabled={true} value="">
          select day
        </option>
        {intervalday.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </label>
  );
};
