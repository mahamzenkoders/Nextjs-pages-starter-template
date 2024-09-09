import * as Yup from 'yup';

export const specializationSchema = Yup.object().shape({
  specialization: Yup.array().of(Yup.string()).min(1, "At least one specialization is required."),
});


export const PersonalInfoSchema=Yup.object().shape({
  // porfilespic: Yup.string().required("Profile picture is required."),
  age: Yup.number()
    .min(18, "Age must be at least 18.")
    .max(100, "Age must be less than or equal to 100.")
    .required("Age is required."),
  gender: Yup.string().required("Gender is required."),
  religion: Yup.string().required("Religion is required."),
  race: Yup.string().required("Race is required."),
  // resumepic: Yup.string().required("Resume picture is required."),
  yearsofexperience: Yup.number()
    .min(0, "Years of experience cannot be negative.")
    .required("Years of experience is required."),
  favouritequote: Yup.string().required("Favourite quote is required."),
  hobbies: Yup.array().of(Yup.string()).required("At least one hobby is required"),
  country: Yup.string().required("Country is required."),
  state: Yup.string().required("State is required."),
  address: Yup.string().required("Address is required."),
})

export const EducationalInfoSchema=Yup.object().shape({
  institutename: Yup.string().required("Institute name is required."),
  degree: Yup.string().required("Degree is required."),
  fieldofstudy: Yup.string().required("Field of study is required."),
  startdate: Yup.date().required("Start date is required."),
  enddate: Yup.date()
    .min(Yup.ref('startdate'), "End date cannot be before start date.")
    .required("End date is required."),
  // certificate: Yup.string().required("Certificate is required."),
})


export const ProfessionalInfoSchema=Yup.object().shape({
  
  companyname: Yup.string().required("Company name is required."),
  jobtitle: Yup.string().required("Job title is required."),
  j_startdate: Yup.date().required("Job start date is required."),
  j_enddate: Yup.date()
    .min(Yup.ref('j_startdate'), "Job end date cannot be before job start date.")
    .required("Job end date is required."),
  jobdescription: Yup.string().required("Job description is required."),
  // experiencecertificate: Yup.string().required("Experience certificate is required."),
})