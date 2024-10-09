import { PricingDataProps } from "@/interface/data.interface";

export const PricingData: PricingDataProps[] = [
  {
    title: "Basic",
    decs: "All feature for basic plan",
    typeCard: "normal",
    price: 75,
    pricingTypeTime: "month",
    list: [
      {
        title: "unlimited video access",
        type: "access",
      },
      {
        title: "ads blocking",
        type: "notAccess",
      },
      {
        title: "Latest news access",
        type: "access",
      },
      {
        title: "Basic match statistics",
        type: "access",
      },
      {
        title: "Match schedules",
        type: "access",
      },
      {
        title: "player statistics detail",
        type: "notAccess",
      },
      {
        title: "real face player 3d model",
        type: "notAccess",
      },
    ],
  },
  {
    title: "premium",
    decs: "All feature for premium plan",
    typeCard: "recommended",
    price: 250,
    pricingTypeTime: "month",
    list: [
      {
        title: "unlimited video access",
        type: "access",
      },
      {
        title: "ads blocking",
        type: "access",
      },
      {
        title: "Latest news access",
        type: "access",
      },
      {
        title: "Basic match statistics",
        type: "access",
      },
      {
        title: "Match schedules",
        type: "access",
      },
      {
        title: "player statistics detail",
        type: "notAccess",
      },
      {
        title: "real face player 3d model",
        type: "notAccess",
      },
    ],
  },
  {
    title: "vip",
    decs: "All feature for vip plan",
    typeCard: "normal",
    price: 750,
    pricingTypeTime: "month",
    list: [
      {
        title: "unlimited video access",
        type: "access",
      },
      {
        title: "ads blocking",
        type: "access",
      },
      {
        title: "Latest news access",
        type: "access",
      },
      {
        title: "Basic match statistics",
        type: "access",
      },
      {
        title: "Match schedules",
        type: "access",
      },
      {
        title: "player statistics detail",
        type: "access",
      },
      {
        title: "real face player 3d model",
        type: "access",
      },
    ],
  },
];
