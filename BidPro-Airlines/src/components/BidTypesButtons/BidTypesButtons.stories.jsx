import React from "react";
import { BidTypesButtons } from "./BidTypesButtons";

export default {
  title: "Components/BidTypesButtons",
  component: BidTypesButtons,
};

const Template = (args) => <BidTypesButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: {
    btnretry: "Retry Import",
    btnperiod: "Bid Periods",
    btnimport: "Import History",
    btndelete: "Delete",
  },
};
