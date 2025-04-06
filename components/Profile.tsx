import { FC } from "react";
import Image from "next/image";
import { Section } from "./Section";
import { TechStackSwiper } from "./techstacks/TechStackSwiper";

interface ProfileProps {
  name: string;
  role: string;
}

export const Profile: FC<ProfileProps> = (props:ProfileProps) => {
  return (
    <Section id="profile">
      <div className="flex flex-col gap-2 md:gap-4 md:flex-row items-center justify-center space-y-4 py-4">
        <Image
          src="/profile.jpeg"
          alt="Michael Kenji Wilkins"
          width={150}
          height={150}
          className="rounded-full h-24 w-24"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">{props.name}</h1>
          <p className="text-sm text-gray-500">{props.role}</p>
        </div>
      </div>
      <div className="w-full">
      <TechStackSwiper />
      </div>
    </Section>
  );
}