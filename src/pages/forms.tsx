import React, { useState } from "react";
import { Formik, Form } from "formik";
import PersonalInfo from "@/components/PersonalInfo";
import EducationalInfo from "@/components/EducationalInfo";
import ProfessionalInfo from "@/components/ProfessionalInfo";
import Logo from "../image/Group 140.png";
import BackgroundImage from "../image/Vector.png";
import Image from "next/image";
import { FormValues } from "@/interface/interfaceValues";
import { initialValues } from "@/FormValues/InitialValues";
import { Button } from "@/components/ui/button";
import {
  EducationalInfoSchema,
  ProfessionalInfoSchema,
  PersonalInfoSchema,
  specializationSchema,
} from "@/schema/FormSchema";
import Specialization from "@/components/specialization";
import { ShowForm } from "@/components/showform";

const Forms: React.FC = () => {
  const [step, setStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleNextStep = async (formik: any) => {
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;

    if (isFormValid) {
      setStep((prevStep) => prevStep + 1);
    } else {
      formik.setTouched(
        Object.keys(errors).reduce((touched, key) => {
          touched[key] = true;
          return touched;
        }, {} as any)
      );
    }
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (values: FormValues, formik: any) => {
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;

    if (isFormValid) {
      if (step < 4) {
        setFormValues(values);
        handleNextStep(formik);
      } else {
        setFormValues(values);
        setShowSummary(true);
      }
    } else {
      formik.setTouched(
        Object.keys(errors).reduce((touched, key) => {
          touched[key] = true;
          return touched;
        }, {} as any)
      );
    }
  };

  const ValidationScheme = () => {
    switch (step) {
      case 1:
        return PersonalInfoSchema;
      case 2:
        return EducationalInfoSchema;
      case 3:
        return ProfessionalInfoSchema;
      case 4:
        return specializationSchema;
      default:
        return PersonalInfoSchema;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom"
        />
      </div>

      <div className="absolute top-8 left-8">
        <Image src={Logo} alt="Logo" width={120} height={50} />
      </div>

      <div className="relative w-full mt-32 max-w-lg bg-white p-10 rounded-lg shadow-lg z-10">
        {!showSummary ? (
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationScheme()}
            onSubmit={(values, formik) => handleSubmit(values, formik)}
          >
            {(formik) => (
              <Form>
                {step === 1 && <PersonalInfo />}
                {step === 2 && <EducationalInfo />}
                {step === 3 && <ProfessionalInfo />}
                {step === 4 && <Specialization />}
                <div className="mt-8 flex justify-end space-x-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handlePreviousStep}
                      className="px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    type="submit"
                    onClick={async () => {
                      const errors = await formik.validateForm();
                      console.log(errors);
                      if (Object.keys(errors).length === 0 && formik.dirty) {
                        if (step < 4) {
                          handleNextStep(formik);
                        } else {
                          handleSubmit(formik.values, formik);
                        }
                      }
                    }}
                    disabled={formik.isSubmitting}
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {step < 4 ? "Next" : "Submit"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <ShowForm values={formValues} />
        )}
      </div>
    </div>
  );
};

export default Forms;
