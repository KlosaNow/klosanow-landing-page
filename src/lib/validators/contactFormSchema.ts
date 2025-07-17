import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required").max(2500),
});
