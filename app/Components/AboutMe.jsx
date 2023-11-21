"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content:(
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Javascript</li>
        <li>SpringBoot</li>
        <li>React</li>
        <li>GitHub</li>
      </ul>
    )
  },
  {
    title: "Education",
    id:"education",
    content:(
      <ul className="list-disc pl-2">
         <li>Bachelors in Computer Science, Global Academy of Technology, India </li>
        <li> Masters in Global Software developer, Hochschule Fulda, Germany</li>
      </ul>
    )
  },
  {
    title:"Experience",
    id:"experience",
    content:(
      <ul className="list-disc pl-2">
        <li>Software Engineer for 1.5 years, Infosys, India</li>
        <li>Software Developer for 1 year, Brillio, India</li>
      </ul>
    )
  }
]

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending,startTransation] = useTransition();

  const handleTabChange = (id) => {
    startTransation(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="items-start h-full gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about-image.png"
          width={400}
          height={400}
          alt="About Me "
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 tex t-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-4">{TAB_DATA.find((t)=> t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
