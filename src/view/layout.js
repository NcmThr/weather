import React from "react";
import styled from "styled-components";
import cloud from "./../img/cloud.jpg";
import HomePage from "./component/home.page";
import { ServiseProvider } from "./provider/servise.provider";
import { CloudImg } from "./layout.style";
import { LoaderProvider } from "./provider/loader.provider";

const Layout = () => {
  return (
    <LoaderProvider>
      <ServiseProvider>
        <CloudImg src={cloud} />
        <HomePage />
      </ServiseProvider>
    </LoaderProvider>
  );
};

export default Layout;
