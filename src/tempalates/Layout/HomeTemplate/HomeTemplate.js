import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { HeaderResponsive } from "../../../HOC/responsiveComponet";
export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props; // props: path, exact and component
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.history, props.location, props.match
        return (
          <>
            <HeaderResponsive>
              <Header />
            </HeaderResponsive>
            <Component {...propsRoute} />
            <Footer />
          </>
        );
      }}
    />
  );
};
