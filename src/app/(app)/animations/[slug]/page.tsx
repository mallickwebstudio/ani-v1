import PreviewTab from "@/components/layouts/preview-tab/preview-tab";
import { allAnimations } from "@/lib/database/database";
import { notFound } from "next/navigation";

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
      <h1 className="p-base text-center bg-secondary rounded-md capitalize text-3xl font-bold">
        {slug} animation
      </h1>
      <div className="mt-base grid sm:grid-cols-2 gap-base">
        {data.animations.map((item, index) => (
          <PreviewTab data={item} index={index} key={item.title + "PreviewTab"} />
        ))}
      </div>
    </div>
  )
}
