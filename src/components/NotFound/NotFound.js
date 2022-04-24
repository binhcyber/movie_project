import React, { useEffect, useState } from "react";
import logo from "../../asset/NotFoundImg/Notfound.gif";
export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img src={logo} />
    </div>
  );
}
