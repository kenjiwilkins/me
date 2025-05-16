import { FC } from "react";
import Image from "next/image";
import { Section } from "./Section";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import english from "@/i18n/dictionaries/en/about.json";
import japanese from "@/i18n/dictionaries/ja/about.json";

interface Props {
  lang: string;
}

const getText = (lang: string) => {
  if (lang === "ja") {
    return japanese;
  } else {
    return english;
  }
}

function getTechStackImage(techStack: string) {
  switch (techStack) {
    case "HTML":
      return "/html5.svg"
    case "CSS":
      return "/css.svg"
    case "JavaScript":
      return "/javascript.png"
    case "Vue.js":
      return "/vuejs.svg"
    case "React":
      return "/react.svg"
    case "Next.js":
      return "/nextjs.png"
    default:
      return "/nextjs.png"
  }
}

export const About: FC<Props> = (props:Props) => {
  return (
    <Section id="about" class="p-4">
      <div className="flex flex-col gap-4 w-full m-4">
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <div className="w-full flex justify-start">
          <div className="w-full text-gray-100 p-4">
            <h2 className="text-2xl font-bold">{getText(props.lang).title}</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  }
                }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                loop
                speed={1000}
              >
                {getText(props.lang).techstack.content.map((cont, index) => {
                  return (
                    <SwiperSlide key={`techstack-${index}`}>
                      <div className="relative flex flex-col gap-2">
                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center opacity-30">
                          <Image src={getTechStackImage(cont.name)} alt={cont.name} width={200} height={200} />
                        </div>
                        <h3 className="text-xl font-bold">{cont.name}</h3>
                        <Image src={getTechStackImage(cont.name)} alt={cont.name} width={60} height={60} />
                        <p className="text-sm font-semibold">{cont.level}</p>
                        <ul className="flex flex-wrap gap-0.5">
                          {cont.contents.map((content, index) => {
                            return (
                              <li key={`techstack-${index}`}>{content}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
          </div>
        </div>
      </div>
    </Section>
  )
}