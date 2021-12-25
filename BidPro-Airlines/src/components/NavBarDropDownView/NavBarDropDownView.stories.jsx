import React from "react";
import { NavBarDropDownView } from "./NavBarDropDownView";
import { Navbar } from "react-bootstrap";

export default {
  title: "Interactive Components/NavBarDropDownView",
  component: NavBarDropDownView,

  decorators: [
    (Story) => (
      <Navbar className="navbar-bg navbar-dark py-3" expand="lg">
        <Story />
      </Navbar>
    ),
  ],
};

const Template = (args) => <NavBarDropDownView {...args} />;

export const AirlineAndPath = Template.bind({});
AirlineAndPath.args = {
  airline: {
    airlineName: "American Airlines",
    bidTypesPath: "/american-airlines/bidtypes",
    pilotsPath: "/american-airlines/pilots",
  },
};
