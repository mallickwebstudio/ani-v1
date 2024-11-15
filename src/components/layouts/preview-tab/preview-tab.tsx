import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PanelPreview from "./panel-preview";
import PanelCode from "./panel-code";
import { Animation } from "@/types";

export default function PreviewTab({
    data,
    index,
    animationType,
}: {
    data: Animation;
    index: number;
    animationType?: string;
}) {
    const { slug, tsxFilepath, jsxFilepath, animation } = data;
    return (
        <Tabs defaultValue="preview" className="w-full aspect-video min-w-base scroll-m-base">
            <TabsList>
                <TabsTrigger value="preview">preview</TabsTrigger>
                <TabsTrigger value="jsx">code.jsx</TabsTrigger>
                <TabsTrigger value="tsx">code.tsx</TabsTrigger>
            </TabsList>
            <TabsContent className="bg-secondary size-full rounded-md overflow-hidden" value="preview">
                <PanelPreview animation={animation} animationType={animationType} index={index} />
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
