import { buttonVariants } from "@/components/ui/button";
import { allAnimations } from "@/lib/database/database";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className="p-base text-center bg-secondary rounded-md capitalize text-3xl font-bold">
        animation
      </h1>
      <div className="mt-base grid gap-base sm:grid-cols-2 md:grid-cols-3">
        {allAnimations.map(item => (
          <div key={item.title + "Animation"}>
            <Link className="h2 mt-block block" href={item.href}>{item.title}</Link>
            <div className="mt-xs">
              {item.animations.map(subItem => (
                <Link className={cn(buttonVariants({ variant: "ghost" }),"block w-fit")} href={subItem.href} key={subItem.title + "Animation"}>
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
