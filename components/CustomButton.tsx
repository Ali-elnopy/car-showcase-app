"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";


const CustomButton = ({title, containerStyles, handelClick, btnType}: CustomButtonProps) => {
    return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={()=>{handelClick}}
        >
            <span className={`flex-1 `}>{title}</span>
        </button>
    )
}

export default CustomButton