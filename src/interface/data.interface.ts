import { CardPricingProps, ListPricingProps } from "./props.interface";

export interface FeaatureDataProps {
    title?: string;
    decs?: string;
    logo?: React.ReactNode | any;
}

export interface PricingDataProps extends CardPricingProps {}
