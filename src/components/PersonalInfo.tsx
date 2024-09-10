import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { FormValues } from "@/interface/interfaceValues";
import { CldUploadWidget } from "next-cloudinary";

const PersonalInfo = () => {
  const { values, setFieldValue } = useFormikContext<FormValues>();
  const [currentHobby, setCurrentHobby] = useState<string>("");

  const handleAddHobby = () => {
    if (currentHobby.trim() !== "") {
      const updatedHobbies = [...(values.hobbies || []), currentHobby];
      setFieldValue("hobbies", updatedHobbies);
      setCurrentHobby("");
    }
  };

  const handleDeleteHobby = (index: number) => {
    const updatedHobbies = values.hobbies.filter((_, i) => i !== index);
    setFieldValue("hobbies", updatedHobbies);
  };

  return (
    <form className="flex w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-center text-gray-700 font-semibold leading-70 text-lg">
          Personal Information
        </h2>
        <h2 className="mt-1 text-sm leading-2 text-gray-600">
          Basic Information
        </h2>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
              <div className="text-center">
                <CldUploadWidget
                  uploadPreset="avzkzbva"
                  onSuccess={(result) => {
                    console.log(result);
                  }}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-black"
                    >
                      <span>Upload your profile</span>
                    </button>
                  )}
                </CldUploadWidget>

                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG or PDF
                </p>
              </div>
            </div>
            <ErrorMessage
              name="profilePic"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt-2">
              <Field
                id="age"
                name="age"
                type="text"
                placeholder="Age"
                autoComplete="given-age"
                className="placeholder:text-gray-400 text-left block h-11 w-full rounded-md border-0 py-1.5 px-2 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="mt-2">
              <Field
                as="select"
                name="gender"
                id="gender"
                autoComplete="gender"
                className="placeholder:text-gray-400 block text-left h-11 w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
              >
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <div className="mt-2">
              <Field
                as="select"
                name="religion"
                id="religion"
                autoComplete="religion"
                className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
              >
                <option value="">Religion</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Jainism">Jainism</option>
                <option value="Juche">Juche</option>
                <option value="Judaism">Judaism</option>
              </Field>
              <ErrorMessage
                name="religion"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <div className="mt-2">
              <Field
                id="race"
                name="race"
                type="text"
                placeholder="Race"
                autoComplete="given-race"
                className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
              />
              <ErrorMessage
                name="race"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 col-span-full">
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <CldUploadWidget
                  uploadPreset="avzkzbva"
                  onSuccess={(result) => {
                    console.log(result?.info);
                  }}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="relative cursor-pointer rounded-md bg-white font-semibold underline text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-black"
                    >
                      <span>Upload your Resume</span>
                    </button>
                  )}
                </CldUploadWidget>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG or PDF</p>
            </div>
          </div>
          <ErrorMessage
            name="resumepic"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="sm:col-span-6">
          <div className="mt-2">
            <Field
              id="yearsofexperience"
              name="yearsofexperience"
              type="text"
              placeholder="Years Of Experience"
              autoComplete="yearsofexperience"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="yearsofexperience"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <div className="mt-2">
            <Field
              id="favouritequote"
              name="favouritequote"
              type="text"
              placeholder="Favourite Quote"
              autoComplete="favouritequote"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="favouritequote"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <div className="mt-4">
            <Field
              id="hobbies"
              name="hobbies"
              type="text"
              placeholder="Hobbies"
              autoComplete="given-hobbies"
              value={currentHobby}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentHobby(e.target.value)
              }
              className="placeholder:text-gray-400 block w-full h-12 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <button
              type="button"
              onClick={handleAddHobby}
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              +
            </button>
            <ErrorMessage
              name="hobbies"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
            {values.hobbies.length > 0 && (
              <ul className="mt-4 list-disc pl-5">
                {values.hobbies.map((hobby: string, index: number) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-1"
                  >
                    <span>{hobby}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteHobby(index)}
                      className="ml-3 text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <h2 className="mt-8 text-sm font-bold leading-2 text-gray-600">
            Address Details
          </h2>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-7">
            <Field
              as="select"
              name="country"
              id="country"
              placeholder="Country"
              autoComplete="country"
              className="placeholder:text-gray-400 block text-left h-11 w-full rounded-md border-0 py-1.5 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            >
              <option value="">Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Pakistan">Pakistan</option>
            </Field>
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-7">
            <Field
              as="select"
              name="state"
              id="state"
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
              name="state"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <div className="mt-4">
            <Field
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              autoComplete="given-address"
              className="placeholder:text-gray-400 block w-full h-16 rounded-md border-0 py-2 px-3 bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-lg sm:leading-6"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
