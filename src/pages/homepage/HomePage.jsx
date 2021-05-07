import React from "react";

import { Toaster } from "react-hot-toast";

import "./HomePage.scss";

import Directory from "../../componets/directory/Directory";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default HomePage;
