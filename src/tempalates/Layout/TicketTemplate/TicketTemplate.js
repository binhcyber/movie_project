import Header from "../HomeTemplate/Header/Header";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import { HeaderResponsive } from "../../../HOC/responsiveComponet";
export const TicketTemplate = (props) => {
  const { Component, ...restProps } = props; // props: path, exact and component
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.history, props.location, props.match
        return (
          <Fragment>
            <HeaderResponsive>
              <Header />
            </HeaderResponsive>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
