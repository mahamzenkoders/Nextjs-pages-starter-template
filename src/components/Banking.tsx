import React from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";

const Banking = () => {
  return (
    <div className="flex w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Banking Details
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
          <div className="sm:col-span-6 w-full">
            <Field
              as="select"
              name="select_bank"
              id="select_bank"
              placeholder="Select Bank"
              autoComplete="select_bank"
              className="placeholder:text-gray-400 block text-left h-11 w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            >
              <option value="">Select Bank</option>
              <option value="sindh">Meezan Bank</option>
              <option value="punjab">Allied Bank</option>
              <option value="kpk">Askari Bank</option>
              <option value="balochistan">National Bank</option>
            </Field>
            <ErrorMessage
              name="select_bank"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="sm:col-span-6 w-full">
            <Field
              id="acc_title"
              name="acc_title"
              type="text"
              placeholder="Account Title"
              autoComplete="given-acc_title"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="acc_title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
          <div className="sm:col-span-6 w-full">
            <Field
              id="ibanNumber"
              name="ibanNumber"
              type="text"
              placeholder="IBAN No"
              autoComplete="given-ibanNumber"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="ibanNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;
