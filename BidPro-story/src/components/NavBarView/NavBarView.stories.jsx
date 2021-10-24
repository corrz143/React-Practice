import React from "react";
import { NavBarView } from "./NavBarView";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

export const DropDownItems = [
  {
    airlineName="American Airlines",
    bidTypesPath="/american-airlines/bidtypes",
    pilotsPath="/american-airlines/pilots"
  },
{
      airlineName="Alaska Airlines",
      bidTypesPath="/alaska-airlines/bidtypes",
      pilotsPath="/alaska-airlines/pilots"
},
{
      airlineName="Frontier Airlines",
      bidTypesPath="/frontier-airlines/bidtypes",
      pilotsPath="/frontier-airlines/pilots"
},
{
      airlineName="UPS",
      bidTypesPath="/ups/bidtypes",
      pilotsPath="/ups/pilots"
}
   

]

const Template = (args) => <NavBarView {...args} />;







// import React from "react";
// import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

// import { NavBarView } from "./NavBarView";

// export default {
//   title: "Components/NavBarView",
//   component: NavBarView,
// };

// const Template = (args) => <NavBarView {...args} />;

// export const DropdownAirlineSection = Template.bind({});
// DropdownAirlineSection.args = {
//   AADropDown: "American Airlines",
//   ASDropDown: "Alaska Airlines",
//   FADropDown: "Frontier Airlines",
//   UPSDropDown: "UPS",

  // AADropDown: (
  // <NavBarDropDownView
  //   airlineName="American Airlines"
  //   bidTypesPath="/american-airlines/bidtypes"
  //   pilotsPath="/american-airlines/pilots"
  // />
  // ),

  // ASDropDown: (
  //   <NavBarDropDownView
  //     airlineName="Alaska Airlines"
  //     bidTypesPath="/alaska-airlines/bidtypes"
  //     pilotsPath="/alaska-airlines/pilots"
  //   />
  // ),

  // FADropDown: (
  //   <NavBarDropDownView
  //     airlineName="Frontier Airlines"
  //     bidTypesPath="/frontier-airlines/bidtypes"
  //     pilotsPath="/frontier-airlines/pilots"
  //   />
  // ),

  // UPSDropDown: (
  //   <NavBarDropDownView
  //     airlineName="UPS"
  //     bidTypesPath="/ups/bidtypes"
  //     pilotsPath="/ups/pilots"
  //   />
  // ),
};

