import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import linkedIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12">
      <div className="absolute h-80 w-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-tranparent rounded-full  blur-lg  top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"> </div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white"> Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="github.com/amanmoldeep">
            <Image src={GithubIcon} alt="GitHub Icon" />{" "}
          </Link>
          <Link href="linkedin.com/amanmoldeep" s>
            <Image src={linkedIcon} alt="GitHub Icon" />{" "}
          </Link>
        </div>
      </div>
     
      <div>
        <form className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="email"
            className="bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5 mb-3"
            id="email"
            required
            placeholder="jacob@gmal.com"
          />

          <label
            htmlFor="subject"
            className="text-sm font-medium text-white "
          >
            Subject
          </label>
          <input
            type="text"
            className="bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
            id="subject"
            required
            placeholder="Just saying hi"
          />
          <label
            htmlFor="message"
            className="mt-3 text-sm font-medium text-white "
          >
            Message
          </label>
          <textarea
            type=""
            className="bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
            id="message"
            required
            placeholder="Type in your thoughts"
          />
          <button type="submit" className="bg-purple-500 mt-3 hover:bg-purple-600 text-white fonr-medium py-2.5 px-5 rounded-lg w-full ">
            Send Messgae
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
