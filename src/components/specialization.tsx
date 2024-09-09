import React from "react";
import { Field, useFormikContext } from "formik";
import { FormValues } from "@/interface/interfaceValues";

const specializations = [
  "Depression",
  "Anxiety",
  "Behavior Change",
  "Family Therapy",
  "Sleeping Difficulty",
  "Grief",
  "PTSD",
  "Loneliness",
  "Job Change",
  "Retirement",
  "Companionship",
  "Purpose",
  "Declining Health",
  "Declining Mortality",
  "Other",
];

const Specialization: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<FormValues>();

  const handleSelect = (spec: string) => {
    const currentSelection = values.specialization;
    if (currentSelection.includes(spec)) {
      setFieldValue(
        "specialization",
        currentSelection.filter((item) => item !== spec)
      );
    } else {
      setFieldValue("specialization", [...currentSelection, spec]);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Select Specialization
        </h2>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-4">
        {specializations.map((spec) => (
          <div
            key={spec}
            className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${
              values.specialization.includes(spec)
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
            onClick={() => handleSelect(spec)}
          >
            {spec}
          </div>
        ))}
        <Field name="specialization" type="hidden" />
      </div>
    </div>
  );
};

export default Specialization;
