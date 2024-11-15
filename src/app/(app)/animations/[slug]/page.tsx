import PreviewTab from "@/components/layouts/preview-tab/preview-tab";
import { allAnimations } from "@/lib/database/database";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allAnimations
    .filter((item) => typeof item.slug === "string") // Ensure valid `slug`
    .map(({ slug }) => ({ slug }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data = allAnimations.find(item => item.slug === slug);

  if (!data) {
    notFound()
    return
  }

  return (
    <div className="">
      <h1 className="p-base text-center bg-secondary rounded-md capitalize">
        {slug} animation
      </h1>
      <div className="mt-base grid sm:grid-cols-2 gap-base">
        {data.animations.map((item, index) => (
          <div className="" key={item.title + "Preview"}>
            <h2 id={item.slug}>{item.title}</h2>
            <PreviewTab data={item} index={index} animationType={data.animationType} />
          </div>
        ))}
      </div>
    </div>
  )
}
