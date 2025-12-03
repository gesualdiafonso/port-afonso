import { twMerge } from "tailwind-merge";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ReviewCard = ({ name, post, company, body, image }: { name: string; post: string; company: string; body: string; image: string }) => {
    return(
        <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full bg-white/10"
          width={32}
          height={32}
          alt={name}
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{post}</p>
          <span>{company}</span>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
    )
}

export default function Testimonial (){
    const t = useTranslations('page.testimonial');

    // Raw reviews
    const reviews = t.raw("reviews");

    // split para duas colunas
    const middle = Math.ceil(reviews.length / 2);
    const firstRow = reviews.slice(0, middle);
    const secondRow = reviews.slice(middle);    
  
  return(
        <div className="items-start mt-25 md:mt-35 c-space">
            <h2 className="text-heading">{t('title')}</h2>
            <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((reviews: { name: string; post: string; company: string; body: string; image: string }) => (
                    <ReviewCard key={reviews.name} {...reviews} />
                ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((reviews: { name: string; post: string; company: string; body: string; image: string }) => (
                    <ReviewCard key={reviews.name} {...reviews} />
                ))}
                </Marquee>
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
            </div>
        </div>
    )
}