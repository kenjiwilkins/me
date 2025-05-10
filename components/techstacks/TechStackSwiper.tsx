"use client"
import { useEffect, useState } from "react";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";
import {debounce} from "lodash-es";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

type TechStack = {
  name: string;
  image: string;
}

const techStacks: TechStack[] = [
  {
    name: "html5",
    image: "/html5.svg"
  },
  {
    name: "css",
    image: "/css.svg"
  },
  {
    name: "javascript",
    image: "/javascript.png"
  },
  {
    name: "nodejs",
    image: "/nodejs.svg"
  },
  {
    name: "typescript",
    image: "/typescript.svg"
  },
  {
    name: "react",
    image: "/react.svg"
  },
  {
    name: "vue",
    image: "/vuejs.svg"
  },
  {
    name: "tailwind",
    image: "/tailwind.svg"
  },
  {
    name: "sass",
    image: "/sass.png"
  },
  {
    name: "nextjs",
    image: "/nextjs.png"
  },
  {
    name: "vitest",
    image: "/vitest.svg"
  },
  {
    name: "cypress",
    image: "/cypress.svg"
  },
  {
    name: "github actions",
    image: "/githubactions.png"
  },
  {
    name: "mongodb",
    image: "/mongodb.svg"
  },
  {
    name: "postgresql",
    image: "/postgresql.png"
  }
]

export const TechStackSwiper = () => {
  // use hooks to change slides per view based on screen size
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(7);
    }
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedHandleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);


  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      speed={10000}
      autoplay={{ delay: 0}}
      loop={true}
    >
      {techStacks.map((techStack) => (
        <SwiperSlide key={techStack.name}>
          <div className="w-24 h-24 flex items-center justify-center">
            <Image src={techStack.image} alt={techStack.name} width={92} height={92}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}