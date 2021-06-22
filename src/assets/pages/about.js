import React from "react";

import Head from "../component/16-About_Head/head";
import Welcome from "../component/17-About_Wel/welcome";
import Provide from "../component/18-About_Provide/provide";
import User from "../component/19-About_User/user";

export default function About() {
  return (
    <>
      <Head />
      <Welcome />
      <Provide />
      <User />
    </>
  );
}
