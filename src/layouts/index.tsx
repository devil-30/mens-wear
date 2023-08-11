"use client";

import React, { ComponentProps } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function CommenLayout({ children }: ComponentProps<any>): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default CommenLayout;
