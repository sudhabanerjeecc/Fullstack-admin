import { ReactNode } from "react";

export interface BreadcumItems {
    label: string;
    href?: string;   // optional for active item
    active?: boolean;
}
export interface BreadcumTypes {
    title: string;
    items: BreadcumItems[];
    actions?: ReactNode
}