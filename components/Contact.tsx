import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionTitle">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need.{" "}
          <span className="underline decoration-[#e93232]/50">Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="contactOptions">
            <PhoneIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(214) 991 0669</p>
          </div>
          <div className="contactOptions">
            <EnvelopeIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <p className="text-2xl">SaucerSam@gmail.com</p>
          </div>
          <div className="contactOptions">
            <MapPinIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Dallas, TX</p>
          </div>
          <div className="contactOptions">
            <CalendarDaysIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Book a chat</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto" action="">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
            cols={20}
            rows={10}
          ></textarea>
          <button
            type="submit"
            className="bg-[#e93232]/60 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
