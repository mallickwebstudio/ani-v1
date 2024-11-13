import FadeUp from "@/animations/tsx/fade/fade-up";
import FadeDown from "@/animations/tsx/fade/fade-down";
import FadeRight from "@/animations/tsx/fade/fade-right";
import FadeLeft from "@/animations/tsx/fade/fade-left";
import FadeUpRight from "@/animations/tsx/fade/fade-up-right";
import FadeUpLeft from "@/animations/tsx/fade/fade-up-left";
import FadeDownRight from "@/animations/tsx/fade/fade-down-right";
import FadeDownLeft from "@/animations/tsx/fade/fade-down-left";

import ZoomIn from "@/animations/tsx/zoom/zoom-in";
import ZoomOut from "@/animations/tsx/zoom/zoom-out";
import ZoomInUp from "@/animations/tsx/zoom/zoom-in-up";
import ZoomInDown from "@/animations/tsx/zoom/zoom-in-down";
import ZoomInLeft from "@/animations/tsx/zoom/zoom-in-left";
import ZoomInRight from "@/animations/tsx/zoom/zoom-in-right";
import ZoomOutUp from "@/animations/tsx/zoom/zoom-out-up";
import ZoomOutDown from "@/animations/tsx/zoom/zoom-out-down";
import ZoomOutLeft from "@/animations/tsx/zoom/zoom-out-left";
import ZoomOutRight from "@/animations/tsx/zoom/zoom-out-right";

import FlipVertical from "@/animations/tsx/flip/flip-vertical";
import FlipHorizontal from "@/animations/tsx/flip/flip-horizontal";
import FlipDiagonal from "@/animations/tsx/flip/flip-diagonal";

import BounceUp from "@/animations/tsx/bounce/bounce-up";
import BounceDown from "@/animations/tsx/bounce/bounce-down";
import BounceRight from "@/animations/tsx/bounce/bounce-right";
import BounceLeft from "@/animations/tsx/bounce/bounce-left";
import BounceUpRight from "@/animations/tsx/bounce/bounce-up-right";
import BounceUpLeft from "@/animations/tsx/bounce/bounce-up-left";
import BounceDownRight from "@/animations/tsx/bounce/bounce-down-right";
import BounceDownLeft from "@/animations/tsx/bounce/bounce-down-left";

import WipeUp from "@/animations/tsx/wipe/wipe-up";
import WipeDown from "@/animations/tsx/wipe/wipe-down";
import WipeLeft from "@/animations/tsx/wipe/wipe-left";
import WipeRight from "@/animations/tsx/wipe/wipe-right";
import WipeUpRight from "@/animations/tsx/wipe/wipe-up-right";
import WipeUpLeft from "@/animations/tsx/wipe/wipe-up-left";
import WipeDownRight from "@/animations/tsx/wipe/wipe-down-right";
import WipeDownLeft from "@/animations/tsx/wipe/wipe-down-left";

export const boxAnimations = [
    {
        slug: "fade",
        title: "Fade",
        href: "/animations/fade",
        animations: [
            {
                slug: "fade-up",
                title: "Fade Up",
                href: "/animations/fade#fade-up",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up.tsx",
                animation: FadeUp
            },
            {
                slug: "fade-down",
                title: "Fade Down",
                href: "/animations/fade#fade-down",
                jsxFilepath: "src/animations/jsx/fade/fade-down.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down.tsx",
                animation: FadeDown
            },
            {
                slug: "fade-right",
                title: "Fade Right",
                href: "/animations/fade#fade-right",
                jsxFilepath: "src/animations/jsx/fade/fade-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-right.tsx",
                animation: FadeRight
            },
            {
                slug: "fade-left",
                title: "Fade Left",
                href: "/animations/fade#fade-left",
                jsxFilepath: "src/animations/jsx/fade/fade-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-left.tsx",
                animation: FadeLeft
            },
            {
                slug: "fade-up-right",
                title: "Fade Up Right",
                href: "/animations/fade#fade-up-right",
                jsxFilepath: "src/animations/jsx/fade/fade-up-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up-right.tsx",
                animation: FadeUpRight
            },
            {
                slug: "fade-up-left",
                title: "Fade Up Left",
                href: "/animations/fade#fade-up-left",
                jsxFilepath: "src/animations/jsx/fade/fade-up-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up-left.tsx",
                animation: FadeUpLeft
            },
            {
                slug: "fade-down-right",
                title: "Fade Down Right",
                href: "/animations/fade#fade-down-right",
                jsxFilepath: "src/animations/jsx/fade/fade-down-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down-right.tsx",
                animation: FadeDownRight
            },
            {
                slug: "fade-down-left",
                title: "Fade Down Left",
                href: "/animations/fade#fade-down-left",
                jsxFilepath: "src/animations/jsx/fade/fade-down-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down-left.tsx",
                animation: FadeDownLeft
            },
        ],
    },
    {
        slug: "zoom",
        title: "Zoom",
        href: "/animations/zoom",
        animations: [
            {
                slug: "zoom-in",
                title: "Zoom In",
                href: "/animations/zoom#zoom-in",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in.tsx",
                animation: ZoomIn
            },
            {
                slug: "zoom-out",
                title: "Zoom Out",
                href: "/animations/zoom#zoom-out",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out.tsx",
                animation: ZoomOut
            },
            {
                slug: "zoom-in-up",
                title: "Zoom In Up",
                href: "/animations/zoom#zoom-in-up",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-up.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-up.tsx",
                animation: ZoomInUp
            },
            {
                slug: "zoom-in-down",
                title: "Zoom In Down",
                href: "/animations/zoom#zoom-in-down",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-down.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-down.tsx",
                animation: ZoomInDown
            },
            {
                slug: "zoom-in-left",
                title: "Zoom In Left",
                href: "/animations/zoom#zoom-in-left",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-left.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-left.tsx",
                animation: ZoomInLeft
            },
            {
                slug: "zoom-in-right",
                title: "Zoom In Right",
                href: "/animations/zoom#zoom-in-right",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-right.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-right.tsx",
                animation: ZoomInRight
            },
            {
                slug: "zoom-out-up",
                title: "Zoom Out Up",
                href: "/animations/zoom#zoom-out-up",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-up.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-up.tsx",
                animation: ZoomOutUp
            },
            {
                slug: "zoom-out-down",
                title: "Zoom Out Down",
                href: "/animations/zoom#zoom-out-down",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-down.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-down.tsx",
                animation: ZoomOutDown
            },
            {
                slug: "zoom-out-left",
                title: "Zoom Out Left",
                href: "/animations/zoom#zoom-out-left",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-left.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-left.tsx",
                animation: ZoomOutLeft
            },
            {
                slug: "zoom-out-right",
                title: "Zoom Out Right",
                href: "/animations/zoom#zoom-out-right",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-right.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-right.tsx",
                animation: ZoomOutRight
            },
        ]
    },
    {
        slug: "flip",
        title: "Flip",
        href: "/animations/flip",
        animations: [
            {
                slug: "flip-vertical",
                title: "Flip Vertical",
                href: "/animations/flip#flip-vertical",
                jsxFilepath: "src/animations/jsx/flip/flip-vertical.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-vertical.tsx",
                animation: FlipVertical,
            },
            {
                slug: "flip-horizontal",
                title: "Flip Horizontal",
                href: "/animations/flip#flip-horizontal",
                jsxFilepath: "src/animations/jsx/flip/flip-horizontal.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-horizontal.tsx",
                animation: FlipHorizontal,
            },
            {
                slug: "flip-diagonal",
                title: "Flip Diagonal",
                href: "/animations/flip#flip-diagonal",
                jsxFilepath: "src/animations/jsx/flip/flip-diagonal.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-diagonal.tsx",
                animation: FlipDiagonal,
            },
        ],
    },
    {
        slug: "bounce",
        title: "Bounce",
        href: "/animations/bounce",
        animations: [
            {
                slug: "bounce-up",
                title: "Bounce Up",
                href: "/animations/bounce#bounce-up",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up.tsx",
                animation: BounceUp,
            },
            {
                slug: "bounce-down",
                title: "Bounce Down",
                href: "/animations/bounce#bounce-down",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down.tsx",
                animation: BounceDown,
            },
            {
                slug: "bounce-right",
                title: "Bounce Right",
                href: "/animations/bounce#bounce-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-right.tsx",
                animation: BounceRight,
            },
            {
                slug: "bounce-left",
                title: "Bounce Left",
                href: "/animations/bounce#bounce-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-left.tsx",
                animation: BounceLeft,
            },
            {
                slug: "bounce-up-right",
                title: "Bounce Up Right",
                href: "/animations/bounce#bounce-up-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up-right.tsx",
                animation: BounceUpRight,
            },
            {
                slug: "bounce-up-left",
                title: "Bounce Up Left",
                href: "/animations/bounce#bounce-up-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up-left.tsx",
                animation: BounceUpLeft,
            },
            {
                slug: "bounce-down-right",
                title: "Bounce Down Right",
                href: "/animations/bounce#bounce-down-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down-right.tsx",
                animation: BounceDownRight,
            },
            {
                slug: "bounce-down-left",
                title: "Bounce Down Left",
                href: "/animations/bounce#bounce-down-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down-left.tsx",
                animation: BounceDownLeft,
            },
        ],
    },
    {
        slug: "wipe",
        title: "Wipe",
        href: "/animations/wipe",
        animations: [
            {
                slug: "wipe-up",
                title: "Wipe Up",
                href: "/animations/wipe#wipe-up",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up.tsx",
                animation: WipeUp,
            },
            {
                slug: "wipe-down",
                title: "Wipe Down",
                href: "/animations/wipe#wipe-down",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down.tsx",
                animation: WipeDown,
            },
            {
                slug: "wipe-left",
                title: "Wipe Left",
                href: "/animations/wipe#wipe-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-left.tsx",
                animation: WipeLeft,
            },
            {
                slug: "wipe-right",
                title: "Wipe Right",
                href: "/animations/wipe#wipe-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-right.tsx",
                animation: WipeRight,
            },
            {
                slug: "wipe-up-right",
                title: "Wipe  Up Right",
                href: "/animations/wipe#wipe-up-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up-right.tsx",
                animation: WipeUpRight,
            },
            {
                slug: "wipe-up-left",
                title: "Wipe  Up Left",
                href: "/animations/wipe#wipe-up-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up-left.tsx",
                animation: WipeUpLeft,
            },
            {
                slug: "wipe-down-right",
                title: "Wipe  Down Right",
                href: "/animations/wipe#wipe-down-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down-right.tsx",
                animation: WipeDownRight,
            },
            {
                slug: "wipe-down-left",
                title: "Wipe  Down Left",
                href: "/animations/wipe#wipe-down-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down-left.tsx",
                animation: WipeDownLeft,
            },
        ],
    }
]

export const textAnimations = [
    // {
    //     slug: "letter",
    //     title: "Letter",
    //     href: "letter",
    //     isActive: true,
    //     animations: [
    //         {
    //             slug: "fade-up",
    //             title: "Fade Up",
    //             href: "/animations/fade#fade-up",
    //         },
    //     ],
    // },
]

export const allAnimations = [
    ...boxAnimations,
    ...textAnimations
]