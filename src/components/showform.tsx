import React from "react";
import { FormValues } from "@/interface/interfaceValues";

interface ShowFormProps {
  values: FormValues;
}

export const ShowForm: React.FC<ShowFormProps> = ({ values }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-center text-gray-900 font-bold text-2xl mb-8">
        Summary of Your Details
      </h2>
      <div className="space-y-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">Profile Picture:</span>{" "}
            {values.porfilespic}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Age:</span> {values.age}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Gender:</span> {values.gender}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Religion:</span> {values.religion}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Race:</span> {values.race}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Resume Information
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">Resume Picture:</span>{" "}
            {values.resumepic}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Years of Experience:</span>{" "}
            {values.yearsofexperience}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Favorite Quote:</span>{" "}
            {values.favouritequote}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Hobbies:</span>{" "}
            {values.hobbies.join(", ")}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Address Information
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">Country:</span> {values.country}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">State:</span> {values.state}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Address:</span> {values.address}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Educational Information
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">Institution Name:</span>{" "}
            {values.institutename}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Degree:</span> {values.degree}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Field of Study:</span>{" "}
            {values.fieldofstudy}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Start Date:</span> {values.startdate}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">End Date:</span> {values.enddate}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Certificate:</span>{" "}
            {values.certificate}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Professional Information
          </h3>
          <p className="text-gray-700">
            <span className="font-medium">Company Name:</span>{" "}
            {values.companyname}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Job Title:</span> {values.jobtitle}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Job Start Date:</span>{" "}
            {values.j_startdate}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Job End Date:</span>{" "}
            {values.j_enddate}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Job Description:</span>{" "}
            {values.jobdescription}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Experience Certificate:</span>{" "}
            {values.experiencecertificate}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Specialization
          </h3>
          <ul className="list-disc pl-5">
            {values.specialization.map((spec, index) => (
              <li key={index} className="text-gray-700">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
