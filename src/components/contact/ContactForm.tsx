"use client";
import React from "react";
import { useFormik, FormikHelpers } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { contactFormSchema } from "@/lib/validators/contactFormSchema";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
// @ts-expect-error: This prop is passed dynamically and is type-checked elsewhere
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

type ContactFormValues = {
  phone: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>,
  ) => {
    console.log("Submitted values:", values);

    actions.resetForm({
      values: {
        phone: "",
        email: "",
        message: "",
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form
        className="flex flex-col mt-10 gap-4 w-[300px] md:w-[350px] xl:w-[500px]"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
          formik.setTouched({
            phone: true,
            email: true,
            message: true,
          });

          const firstErrorField = Object.keys(formik.errors)[0];
          if (firstErrorField) {
            const errorElement = document.getElementById(firstErrorField);
            if (errorElement) {
              errorElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
        }}
      >
        <div className="flex flex-col space-y-2">
          <label className="font-accent">Phone Number </label>
          <MyPhoneInput
            country={"ng"}
            regions={["africa"]}
            containerClass={"10px"}
            inputStyle={{
              width: "100%",
              height: "3rem",
              fontSize: "16px",
            }}
            value={formik.values.phone}
            onChange={(value: string) => formik.setFieldValue("phone", value)}
            onBlur={() => formik.setTouched({ ...formik.touched, phone: true })}
          />
          {formik.touched && formik.errors.phone ? (
            <span className="text-red-400">{formik.errors.phone} </span>
          ) : null}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-accent">Email</label>
          <input
            className="bg-white border border-gray-400 outline-none rounded-sm placeholder-font-main py-4 px-4 field-focus"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-400">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-accent">Message</label>
          <textarea
            className="bg-white border border-gray-400 outline-none rounded-sm resize-none py-3 px-4 placeholder-font-main field-focus"
            placeholder="Enter your message"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className="text-red-400">{formik.errors.message}</span>
          ) : null}
        </div>
        <JoinWaitlistButton
          className="py-10 h-[50px]"
          type="submit"
          disabled={!(formik.dirty && formik.isValid)}
        />
      </form>
    </div>
  );
};
