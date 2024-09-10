import React from "react";
import { useFormikContext, Field } from "formik";

interface TimeFieldProps {
  name: string;
  placeholder: string;
}

export const TimeField: React.FC<TimeFieldProps> = ({ name, placeholder }) => {
  const { setFieldValue, values } = useFormikContext<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  return (
    <Field name={name}>
      {({ field }: { field: any }) => (
        <div className="mt-2">
          <input
            type="time"
            {...field}
            value={values[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="placeholder:text-gray-400 text-left block h-11 w-full rounded-md border-0 py-1.5 px-2 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
          />
        </div>
      )}
    </Field>
  );
};
