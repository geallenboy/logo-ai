import { icons } from "lucide-react";

export interface storageProps {
    iconSize?: number;
    iconRotate?: number;
    iconColor?: string;
    icon?: keyof typeof icons;
    bgRounded?: number;
    bgPadding?: number;
    bgColor?: string;
}