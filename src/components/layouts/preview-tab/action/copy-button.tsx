"use client"
import { cn } from "@/lib/utils";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
    text: string;
}
export default function CopyButton({ text }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 p-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground flex-center cursor-pointer group"
            )}
            tabIndex={0}
            onClick={handleCopy}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleCopy();
                }
            }}
        >
            {isCopied ? (
                <CheckCheck className="size-3 text-green-500" />
            ) : (
                <Copy className="size-3 text-foreground/70 group-hover:text-foreground" />
            )}
        </div>
    );
}
