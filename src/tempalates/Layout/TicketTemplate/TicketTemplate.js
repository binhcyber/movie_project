import Header from "../HomeTemplate/Header/Header";
import { Route } from "react-router-dom";
import { Fragment } from "react";
export const TicketTemplate = (props) => {
  const { Component, ...restProps } = props; // props: path, exact and component
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.history, props.location, props.match
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
