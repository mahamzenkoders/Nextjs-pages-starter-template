import React from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";

const Liscence = () => {
  return (
    <div className="flex w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12 w-full">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Liscense
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
        
          <div className="sm:col-span-6 w-full">
            <Field
              as="select"
              name="l_state"
              id="l_state"
              placeholder="State"
              autoComplete="state"
              className="placeholder:text-gray-400 block text-left h-11 w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            >
              <option value="">State</option>
              <option value="sindh">Sindh</option>
              <option value="punjab">Punjab</option>
              <option value="kpk">KPK</option>
              <option value="balochistan">Balochistan</option>
            </Field>
            <ErrorMessage
              name="l_state"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="sm:col-span-6 w-full">
            <Field
              id="npi_number"
              name="npi_number"
              type="text"
              placeholder="NPI Number"
              autoComplete="given-npi_number"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="npi_number"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="mt-4 text-gray-400">
          <label>Upload Liscense</label>
        </div>
        <div className="mt-3 border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="experiencecertificate"
                    className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-black"
                  >
                    <span>Click to Upload</span>
                    <Field
                      id="experiencecertificate"
                      name="experiencecertificate"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <ErrorMessage
                  name="experiencecertificate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG or PDF
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-400">
          <label>Upload Liability Insurance</label>
        </div>
        <div className="mt-3 border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="experiencecertificate"
                    className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-black"
                  >
                    <span>Click to Upload</span>
                    <Field
                      id="experiencecertificate"
                      name="experiencecertificate"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <ErrorMessage
                  name="experiencecertificate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG or PDF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liscence;
