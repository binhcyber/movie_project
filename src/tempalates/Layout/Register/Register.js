import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setUserSignUpAction } from "../../../redux/action/UserAction";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
export default function Register() {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    hoTen: Yup.string().required("Required"),
    matKhau: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    taiKhoan: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    soDt: Yup.string()
      .matches(/^[0-9]+$/, "Only number!")
      .min(9, "Too Short!")
      .max(13, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <Formik
      class="container mx-auto p-4 bg-white"
      initialValues={{
        hoTen: "",
        email: "",
        soDt: "",
        matKhau: "",
        taiKhoan: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        let data = { ...values, maNhom: "GP01" };
        console.log(values);
        dispatch(setUserSignUpAction(data));
      }}
    >
      {({ errors, touched }) => (
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 class="text-lg font-bold">Register</h1>
          <Form class="flex flex-col mt-4">
            <Field
              type="text"
              name="hoTen"
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Họ tên"
            />
            {errors.hoTen && touched.hoTen ? <div>{errors.hoTen}</div> : null}
            <Field
              type="email"
              name="email"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              type="text"
              name="soDt"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Số điện thoại"
            />
            {errors.soDt && touched.soDt ? <div>{errors.soDt}</div> : null}
            <Field
              type="password"
              name="matKhau"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Mật khẩu"
            />
            {errors.matKhau && touched.matKhau ? (
              <div>{errors.matKhau}</div>
            ) : null}
            <Field
              type="text"
              name="taiKhoan"
              class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Tài khoản"
            />
            {errors.taiKhoan && touched.taiKhoan ? (
              <div>{errors.taiKhoan}</div>
            ) : null}
            <button
              type="submit"
              class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Register
            </button>
            <div class="flex flex-col items-center mt-5">
              <p class="mt-1 text-xs font-light text-gray-500">
                Register already?
                <NavLink to="/login" class="ml-1 font-medium text-blue-400">
                  Login now
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
