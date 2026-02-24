import { MouseEventHandler } from "react";
export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handelClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";

}