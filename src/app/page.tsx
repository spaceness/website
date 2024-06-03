import { Button } from "@/components/ui/button";
import { Icon, LucideIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}
function Project({ title, description, url, icon }: ProjectProps) {
  return (
    <div className="border-solid border-2 p-5 rounded-md">
      <div className="flex flex-row gap-2 font-bold text-1xl mb-2">
        {icon}
        {title}
      </div>
      <hr></hr>
      <p className="mt-2">{description}</p>
      <br></br>
      <a target="_blank" href={url}>
        <Button className="w-full mb-auto">Check it out</Button>
      </a>
    </div>
  );
}

interface MemberProps {
  url: string;
  name: string;
  profile: string;
}
function Member({ url, name, profile }: MemberProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="p-2 border flex max-w-fit flex-col items-center rounded-sm"
    >
      <Image
        src={profile}
        alt={`${name}'s profile picture`}
        className="rounded-sm"
        width="58"
        height="58"
      ></Image>
      <p>{name}</p>
    </a>
  );
}

export default function Home() {
  return (
    <main className="m-5 flex flex-col gap-3">
      <h1 className="text-4xl font-bold">spaceness</h1>
      <p>
        here at spaceness we develop free and open source software for everyone
        to use.
      </p>
      <hr />
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">projects</h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          {/* <div className="border-white border-solid border-2 p-5 rounded-md">
            <div className="flex flex-row gap-2 font-bold text-1xl">
              <Sparkles />
              <h3>Stardust</h3>
            </div>
            <p>
              Stardust is the platform for streaming isolated desktop
              containers.
            </p>
            <br></br>
            <a target="_blank" href="https://stardust.spaceness.one">
              <Button className="w-full">Check it out</Button>
            </a>
          </div> */}
          <Project
            title="Stardust"
            icon={<Sparkles />}
            description="Stardust is the platform for streaming isolated desktop containers"
            url="https://stardust.spaceness.one"
          />
          <Project
            title="Trollsmoke"
            icon={
              <Image
                src="/trollsmoke.svg"
                alt="trollsmoke logo"
                width="24"
                height="24"
              />
            }
            description="utilities for everyone and #1 opp of trollsmile"
            url="https://github.com/spaceness/trollsmoke"
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-1">members</h2>
        <div className="flex flex-rows gap-4">
          <Member
            name="yosoof3"
            profile="https://cdn.discordapp.com/avatars/1209715386489114645/e2d25ae04dd290f03914fbfcbe326366.webp?size=128"
            url="https://yapping.monster"
          />
          <Member
            name="incognitoTGT"
            profile="https://cdn.discordapp.com/avatars/1053443057451794585/e11a0f3625ffde367560e0dd06797c0d.webp?size=128"
            url="https://incognitotgt.me"
          />
          <Member
            name="rare1k"
            profile="https://cdn.discordapp.com/avatars/1129545353717366884/842e2ea8a4cdfd4df820d9c70a3754d8.webp?size=128"
            url="https://rare1k.dev"
          />
          <Member
            name="flux"
            profile="https://cdn.discordapp.com/avatars/1073074410187141121/4c47ed18c116ea1d0b45a580001a8463.webp?size=128"
            url="https://zirc.lol"
          />
          <Member
            name="akane"
            profile="https://cdn.discordapp.com/avatars/1052016750486638613/456ffe5f5938e328ca3823f9a8fa948e.webp?size=128"
            url="https://discord.com/users/1052016750486638613"
          />
        </div>
      </div>
    </main>
  );
}
