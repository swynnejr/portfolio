import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PortfolioInfo } from "../typings";

type Props = {portfolioInfo: PortfolioInfo};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({portfolioInfo}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:saucersam@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionTitle">Contact</h3>
      <div className="flex flex-col w-full sm:w-fit space-y-1 sm:space-y-2 mt-5 md:space-y-5">
        <h4 className="font-semibold text-2xl sm:text-4xl text-center hidden md:inline-block">
          I have what you need.
        </h4>
          {/* <span className="underline decoration-[#e93232]/50 text-lg lg:text-3xl text-center">Lets talk.</span> */}
        <div className="space-y-1 sm:space-y-2">
          <div className="contactOptions">
            <PhoneIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <a href={`sms:${portfolioInfo.phoneNumber}`} className="text-lg md:text-2xl underline">{portfolioInfo.phoneNumber}</a>
          </div>
          <div className="contactOptions">
            <EnvelopeIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <a href={`mailto:${portfolioInfo.email}`} className="text-lg md:text-2xl underline">{portfolioInfo.email}</a>
          </div>
          <div className="contactOptions">
            <MapPinIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">{portfolioInfo.address}</p>
          </div>
          <div className="contactOptions">
            <CalendarDaysIcon className="text-[#e93232] h-7 w-7 animate-pulse" />
            <a className="text-lg md:text-2xl underline cursor-pointer" href="https://calendly.com/TexanNerd">Book a chat</a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:w-full mx-2 md:mx-auto"
          action=""
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              {...register("name")}
              id="name"
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              id="email"
              placeholder="Email"
              className="contactInput mt-2 md:mt-0"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            id="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            id="message"
            placeholder="Message"
            className="contactInput"
            name=""
            cols={10}
            rows={5}
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
