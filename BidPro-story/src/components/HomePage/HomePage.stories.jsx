import React from "react";
import { HomePage } from "./HomePage";
import { AdministrationView } from "../AdministrationView/AdministrationView";
import { VersionView } from "../VersionView/VersionView";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import { AirlineView } from "../AirlineView/AirlineView";
import { LogoView } from "../LogoView/LogoView";
import { FooterView } from "../FooterView/FooterView";

export default {
  title: "Components/HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const HomeViewPage = Template.bind({});
HomeViewPage.args = {
  administrationView: <AdministrationView name="Tom Jones!" />,
  versionView: <VersionView current="1.1.0" />,
  airlineView: (
    <AirlineView name="American Airlines" path="/american-airlines/bidtypes" />
  ),

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

  footerView: <FooterView />,
};
