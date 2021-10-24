import React from "react";
import { HeaderView } from "./HeaderView";
import { LogoView } from "../LogoView/LogoView";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

export default {
  title: "Components/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

export const DropdownAirlineSection = Template.bind({});
DropdownAirlineSection.args = {
  logoView: <LogoView />,
  AADropDown: (
    <NavBarDropDownView
      airlineName="American Airlines"
      bidTypesPath="/american-airlines/bidtypes"
      pilotsPath="/american-airlines/pilots"
    />
  ),

  ASDropDown: (
    <NavBarDropDownView
      airlineName="Alaska Airlines"
      bidTypesPath="/alaska-airlines/bidtypes"
      pilotsPath="/alaska-airlines/pilots"
    />
  ),

  FADropDown: (
    <NavBarDropDownView
      airlineName="Frontier Airlines"
      bidTypesPath="/frontier-airlines/bidtypes"
      pilotsPath="/frontier-airlines/pilots"
    />
  ),

  UPSDropDown: (
    <NavBarDropDownView
      airlineName="UPS"
      bidTypesPath="/ups/bidtypes"
      pilotsPath="/ups/pilots"
    />
  ),
};
