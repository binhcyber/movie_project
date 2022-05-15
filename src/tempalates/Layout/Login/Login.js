import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginAction } from "../../../redux/action/UserAction";
import { MA_NHOM } from "../../../utils/setting/config";
import { NavLink, useHistory } from "react-router-dom";
import { message } from "antd";
import * as Yup from "yup";
export default function Login() {
  const dispatch = useDispatch();
  const { userLogin, userSignUp } = useSelector((state) => state.UserReducer);
  const SignupSchema = Yup.object().shape({
    matKhau: Yup.string()
      // .matches(/(userLogin?.matKhau)/, "Mât khẩu không hợp lệ")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    taiKhoan: Yup.string()
      // .matches(/({userLogin?.matKhau})/, "Tài khoản không hợp lệ")
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      class="container mx-auto p-4 bg-white"
      initialValues={{
        taiKhoan: "",
        matKhau: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        let data = { ...values, maNhom: "GP01" };
        dispatch(setUserLoginAction(data));
      }}
    >
      {({ errors, touched }) => (
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 class="text-lg font-bold">Login</h1>
          <Form class="flex flex-col mt-4">
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
              Login
            </button>
            <div class="flex flex-col items-center mt-5">
              <p class="mt-1 text-xs font-light text-gray-500">
                Are you register?
                <NavLink to="/register" class="ml-1 font-medium text-blue-400">
                  Register now
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
