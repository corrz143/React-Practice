import React from "react";
import { LogoView } from "./LogoView";

export default {
  title: "Components/LogoView",
  component: LogoView,
};

const Template = (args) => <LogoView {...args} />;

export const Logo = Template.bind({});
Logo.args = {};
