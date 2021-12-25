import React from "react";
import { NavBarView } from "./NavBarView";
import * as AirlineNames from "../NavBarDropDownView/NavBarDropDownView.stories";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;

export const AirlineDropdown = Template.bind({});
AirlineDropdown.args = {
  airlines: [
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      pilotsPath: "/frontier-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      pilotsPath: "/ups/pilots",
    },
  ],
  // loading: false,
};

// import React from "react";
// import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

// import { NavBarView } from "./NavBarView";

// export default {
//   title: "Components/NavBarView",
//   component: NavBarView,
// };

// const Template = (args) => <NavBarView {...args} />;

// export const NavBarDropDownView =>
// <NavBarDropDownView.args = {
//   AADropDown:
//     ((airlineName = "American Airlines"),
//     (bidTypesPath = "/american-airlines/bidtypes"),
//     (pilotsPath = "/american-airlines/pilots")),

//   ASDropDown:
//     // <NavBarDropDownView
//     ((airlineName = "Alaska Airlines"),
//     (bidTypesPath = "/alaska-airlines/bidtypes"),
//     (pilotsPath = "/alaska-airlines/pilots")),
//   // />

//   FADropDown:
//     // <NavBarDropDownView
//     ((airlineName = "Frontier Airlines"),
//     (bidTypesPath = "/frontier-airlines/bidtypes"),
//     (pilotsPath = "/frontier-airlines/pilots")),
//   // />

//   UPSDropDown:
//     // <NavBarDropDownView
//     ((airlineName = "UPS"),
//     (bidTypesPath = "/ups/bidtypes"),
//     (pilotsPath = "/ups/pilots")),
//   // />
// };
