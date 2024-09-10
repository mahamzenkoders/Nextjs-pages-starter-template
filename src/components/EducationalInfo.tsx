import React from "react";
import { Field, ErrorMessage } from "formik";
import { DateField } from "@/fields/dateField";

const EducationalInfo: React.FC = () => {
  return (
    <form className="flex w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Educational Information
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
          <div className="sm:col-span-6 w-full">
            <div className="mt-2">
              <Field
                id="institutename"
                name="institutename"
                type="text"
                placeholder="Institute Name"
                autoComplete="given-institutename"
                className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
              />
              <ErrorMessage
                name="institutename"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div className="sm:col-span-6 w-full">
            <div className="mt-2">
              <Field
                id="degree"
                name="degree"
                type="text"
                placeholder="Degree"
                autoComplete="given-degree"
                className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
              />
              <ErrorMessage
                name="degree"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
          <div className="sm:col-span-6 w-full">
            <div className="mt-2">
              <Field
                id="fieldofstudy"
                name="fieldofstudy"
                type="text"
                placeholder="Field Of Study"
                autoComplete="given-fieldofstudy"
                className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
              />
              <ErrorMessage
                name="fieldofstudy"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="text-gray-400">Start Date</label>
            <DateField name="startdate" placeholder="Start Date" />
            <ErrorMessage
              name="startdate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="sm:col-span-3">
            <label className="text-gray-400">End Date</label>
            <DateField name="enddate" placeholder="End Date" />
            <ErrorMessage
              name="enddate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
        <div className="mt-4 text-gray-400">
          <label>Certificate</label>
        </div>
        <div className="mt-3 border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-black"
                  >
                    <span>Upload your profile</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG or PDF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EducationalInfo;
