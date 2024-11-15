"use client"
import { ComponentType, ReactNode, useState } from "react";
import Box from "@/components/elements/box";
import ReanimateButton from "./action/reanimate-button";
import { cn } from "@/lib/utils";

interface PanelPreviewProps {
    animation: ComponentType<{ children: ReactNode }>;
    index: number;
    animationType?: string;
}

export default function PanelPreview({ animation: Animation, animationType, index }: PanelPreviewProps) {
    const [reanimate, setReanimate] = useState(0);

    const handleReanimate = () => {
        setReanimate(prev => prev + 1);
    };

    return (
        <div className={cn(
            "relative p-base bg-gradient-to-br size-full flex-center",
            (animationType === "text" ? "bg-black" : `grad-${index % 10}`))}
        >
            <div className="absolute flex gap-xs top-sm right-sm">
                <ReanimateButton onClick={handleReanimate} />
            </div>
            {animationType === "text"
                ? <Animation key={reanimate}> </Animation>
                : <Animation key={reanimate}>
                    <Box />
                </Animation>
            }
        </div>
    );
}
