import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginAction } from "../../../redux/action/UserAction";
import { MA_NHOM } from "../../../utils/setting/config";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import * as Yup from "yup";
export default function Login() {
  const dispatch = useDispatch();
  const { userLogin, userSignUp } = useSelector((state) => state.UserReducer);
  console.log(userLogin);
  console.log(userSignUp);
  const SignupSchema = Yup.object().shape({
    matKhau: Yup.string()
      // .matches(/(userLogin?.matKhau)/, "Mât khẩu không hợp lệ")
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    taiKhoan: Yup.string()
      // .matches(/({userLogin?.matKhau})/, "Tài khoản không hợp lệ")
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        let data = { ...values, maNhom: "GP01" };
        // console.log(data);
        dispatch(setUserLoginAction(data));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <Field
              name="taiKhoan"
              type="text"
              id="taiKhoan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
            {errors.taiKhoan && touched.taiKhoan ? (
              <div>{errors.taiKhoan}</div>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="matKhau"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <Field
              name="matKhau"
              type="password"
              id="matKhau"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.matKhau && touched.matKhau ? (
              <div>{errors.matKhau}</div>
            ) : null}
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              {/* <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              /> */}
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
