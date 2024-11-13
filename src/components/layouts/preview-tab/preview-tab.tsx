import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PanelPreview from "./panel-preview";
import PanelCode from "./panel-code";
import { ComponentType, ReactNode } from "react";

export default function PreviewTab({
    data,
    index,
}: {
    data: {
        slug: string
        tsxFilepath: string
        jsxFilepath: string
        animation: ComponentType<{ children: ReactNode }>;
    };
    index: number;
}) {
    const { slug, tsxFilepath, jsxFilepath, animation } = data;
    return (
        <Tabs id={slug} defaultValue="preview" className="w-full aspect-video min-w-base scroll-m-base">
            <TabsList>
                <TabsTrigger value="preview">preview</TabsTrigger>
                <TabsTrigger value="jsx">{`${slug}.jsx`}</TabsTrigger>
                <TabsTrigger value="tsx">{`${slug}.tsx`}</TabsTrigger>
            </TabsList>
            <TabsContent className="bg-secondary size-full rounded-md overflow-hidden" value="preview">
                <PanelPreview animation={animation} index={index} />
            </TabsContent>

            <TabsContent className="bg-secondary size-full rounded-md overflow-hidden" value="jsx">
                <PanelCode filePath={jsxFilepath} extention="jsx" fileName={slug} />
            </TabsContent>

            <TabsContent className="bg-secondary size-full rounded-md overflow-hidden" value="tsx">
                <PanelCode filePath={tsxFilepath} extention="tsx" fileName={slug} />
            </TabsContent>
        </Tabs>
    )
}
