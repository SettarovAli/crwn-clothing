import React from "react";

import { Toaster } from "react-hot-toast";
import { HomePageContainer } from "./HomePageStyles";

import "./HomePage.scss";

import Directory from "../../componets/directory/Directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
      <Toaster position="bottom-left" reverseOrder={false} />
    </HomePageContainer>
  );
};

export default HomePage;
