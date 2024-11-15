import { ComponentType, ReactNode } from "react";

export type AnimationCategory = {
    slug: string;
    title: string;
    href: string;
    animationType?: "text";
    isActive?: boolean;
    animations: Animation[];
};

export type Animation = {
    slug: string;
    title: string;
    href: string;
    jsxFilepath: string;
    tsxFilepath: string;
    animation: ComponentType<{ children: ReactNode }>;
};