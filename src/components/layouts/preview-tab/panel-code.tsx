import { existsSync, readFileSync } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import CopyButton from "./action/copy-button";
import DownloadButton from "./action/download-button";

export default async function PanelCode({
    filePath,
    fileName,
    extention
}: {
    filePath: string
    fileName: string
    extention: string
}) {
    if (!existsSync(filePath)) {
        return <div className="">Code Not Found</div>;
    }

    const fileContent = readFileSync(filePath, "utf-8");
    const codeWithFences = `\`\`\`${extention}\n${fileContent}\n\`\`\``;

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: "tokyo-night",
        })
        .use(rehypeStringify);

    const code = (await processor.process(codeWithFences)).toString();

    return (
        <div className="relative size-full">
            <div className="absolute flex gap-xs top-sm right-sm">
                <CopyButton text={fileContent} />
                <DownloadButton text={fileContent} extention={extention} fileName={fileName} />
            </div>
            <div className="size-full overflow-scroll">
                <pre className="prose min-w-full prose-p:rounded-none overflow-scroll" dangerouslySetInnerHTML={{ __html: code }} />
            </div>
        </div>
    );
}
