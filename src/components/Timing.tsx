import React from "react";
import { TimeField } from "@/fields/timeField";
import { ErrorMessage } from "formik";

const Timing = () => {
  return (
    <div className="flex w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Your Available Timings
        </h2>
        <div className="sm:col-span-3">
          <label className="text-gray-400">Start Time</label>
          <TimeField name="t_startdate" placeholder="Start Time" />
          <ErrorMessage
            name="t_startdate"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="sm:col-span-3">
          <label className="text-gray-400">End Time</label>
          <TimeField name="t_enddate" placeholder="End Time" />
          <ErrorMessage
            name="t_enddate"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Timing;
