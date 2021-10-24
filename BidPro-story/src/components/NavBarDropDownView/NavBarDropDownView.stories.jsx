import React from "react";
import { NavBarDropDownView } from "./NavBarDropDownView";

export default {
  title: "Interactive Components/NavBarDropDownView",
  component: NavBarDropDownView,
};

const Template = (args) => <NavBarDropDownView {...args} />;

export const AirlineNameAndPath = Template.bind({});
AirlineNameAndPath.args = {
  airlineName: "American Airlines",
  bidTypesPath: "/american-airlines/bidtypes",
  pilotsPath: "/american-airlines/pilots",
};
