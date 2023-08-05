import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { contactSchema } from '@/utils';
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// @ts-ignore
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

export default function ContactForm() {
  const handleSubmit = (values: object, actions: any) => {
    console.log(values);
    actions.resetForm({ values: "" })

  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: handleSubmit
  })

  return (
    <>
      <Box>
        <Box as='form' width={{ base: '300px', md: '500px', lg: '500px' }} py='2rem' onSubmit={formik.handleSubmit}>
          <FormControl mb='1.5rem'>
            <FormLabel fontSize="sm" color="black.40">
              Phone Number{" "}
            </FormLabel>
            <MyPhoneInput
              country={"ng"}
              regions={["africa"]}
              containerClass={"10px"}
              inputStyle={{
                width: "100%",
                height: "3rem",
                outline: "2px solid transparent",
              }}
              value={formik.values.phone}
              onChange={(e: () => void) => formik.setFieldValue("phone", e)}
              onBlur={formik.handleBlur("phone")}
            />
            {formik.touched && formik.errors.phone ? (
              <Text as="span" mb="1rem" color="secondary.50">{formik.errors.phone} </Text>
            ) : null}
          </FormControl>


          <FormControl mb="1.5rem">
            <FormLabel fontSize="sm" color="black.40">
              Email
            </FormLabel>
            <Input
              type="text"
              name="email"
              id="email"
              fontSize="sm"
              size='lg'
              placeholder="Enter your Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Text as="span" mb="1rem" color="secondary.50">{formik.errors.email}</Text>
            ) : null}
          </FormControl>
          <FormControl mb='1rem'>
            <FormLabel fontSize="sm" color="black.40">
              Message
            </FormLabel>
            <Textarea
              placeholder='Enter your message'
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}

            />
            {formik.touched.message && formik.errors.message ? (
              <Text as="span" mb="1rem" color="secondary.50">{formik.errors.message}</Text>
            ) : null}
          </FormControl>

          <Box display="flex" justifyContent="center" mt='2rem'>
            <Button
              width="100%"
              p="1.5rem"
              color="neutral.50"
              bgColor="primary.50"
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
