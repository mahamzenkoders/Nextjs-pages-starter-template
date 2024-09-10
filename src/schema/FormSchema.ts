import * as Yup from 'yup';



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


export const specializationSchema=Yup.object().shape({
  specialization: Yup.array().of(Yup.string()).min(1, "At least one specialization is required."),
})


export const liscenseSchema=Yup.object().shape({
  l_state: Yup.string().required("License state is required."),
  npi_number: Yup.string()
    .matches(/^[0-9]{10}$/, "NPI number must be 10 digits.")
    .required("NPI number is required."),
  // liscense: Yup.string().required("License is required."),
  // insurance: Yup.string().required("Insurance is required."),
})

export const TimingSchema=Yup.object().shape({
  t_startdate: Yup.string()
  .required("Training start date and time is required."),
  t_enddate: Yup.string()
  .required("Training end date and time is required.")
})


export const bankingSchema = Yup.object().shape({

  select_bank: Yup.string().required("Bank selection is required."),
  acc_title: Yup.string().required("Account title is required."),
  ibanNumber: Yup.string()
    .matches(/^[A-Z0-9]+$/, "IBAN must contain only letters and numbers.")
    .min(15, "IBAN must be at least 15 characters.")
    .max(34, "IBAN must be at most 34 characters.")
    .required("IBAN number is required.")
});
