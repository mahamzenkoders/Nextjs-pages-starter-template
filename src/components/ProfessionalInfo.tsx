import React from "react";
import { Field, ErrorMessage } from "formik";
import { DateField } from "@/fields/dateField";
import { CldUploadWidget } from "next-cloudinary";

const ProfessionalInfo: React.FC = () => {
  return (
    <div className="flex w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Professional Info
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
          <div className="sm:col-span-6 w-full">
            <Field
              id="companyname"
              name="companyname"
              type="text"
              placeholder="Company Name"
              autoComplete="given-companyname"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="companyname"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="sm:col-span-6 w-full">
            <Field
              id="jobtitle"
              name="jobtitle"
              type="text"
              placeholder="Job Title"
              autoComplete="given-jobtitle"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="jobtitle"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="text-gray-400">Start Date</label>
            <DateField name="j_startdate" placeholder="Start Date" />
            <ErrorMessage
              name="j_startdate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="text-gray-400">End Date</label>
            <DateField name="j_enddate" placeholder="End Date" />
            <ErrorMessage
              name="j_enddate"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="mt-7 sm:col-span-3">
          <Field
            as="textarea"
            id="jobdescription"
            name="jobdescription"
            placeholder="Job Description"
            className="placeholder:text-gray-400 block w-full h-32 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            name="jobdescription"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="mt-4 text-gray-400">
          <label>Upload Experience Certificate</label>
        </div>
        <div className="mt-3 border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
              <CldUploadWidget
                uploadPreset="avzkzbva"
                onSuccess={(result) => {
                  console.log(result.info);
                }}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-black"
                  >
                    <span>Upload Experience Certificate</span>
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
