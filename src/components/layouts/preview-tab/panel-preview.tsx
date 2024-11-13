"use client"
import { ComponentType, ReactNode, useState } from "react";
import Box from "@/components/elements/box";
import ReanimateButton from "./action/reanimate-button";
import { cn } from "@/lib/utils";

interface PanelPreviewProps {
    animation: ComponentType<{ children: ReactNode }>;
    index: number
}

export default function PanelPreview({ animation: Animation, index }: PanelPreviewProps) {
    const [reanimate, setReanimate] = useState(0);

    const handleReanimate = () => {
        setReanimate(prev => prev + 1);
    };

    return (
        <div className={cn("relative p-base bg-gradient-to-br size-full flex-center", 
        `grad-${index % 10}`
        )}>
            <div className="absolute flex gap-xs top-sm right-sm">
                <ReanimateButton onClick={handleReanimate} />
            </div>

            <Animation key={reanimate}>
                <Box />
            </Animation>
        </div>
    );
}
