import { motion } from "framer-motion";
import RoundButton from "../../buttons/RoundButton";

function HeroSection() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 200,
        }}
        className="hidden  lg:block w-big h-big absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-950
         rounded-full -z-10"
      ></motion.div>

      <div className="flex flex-row h-screen">
        <div className=" w-screen flex justify-center items-center">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="text-4xl font-bold mr-3">HI, I`M</h1>
              <h1 className="text-4xl font-bold text-blue-700">
                HASHAN RANASINGHE
              </h1>
              <h1 className="text-4xl font-bold mr-3">.</h1>
            </div>
            <div className="mt-5">

            </div>
                        <div>
              <h1 className="text-4xl font-bold mr-3">Mobile App Developer</h1>
              <RoundButton buttonText="Contact Me" />
              <RoundButton buttonText="About Me" />
            </div>
          </div>
        </div>
        <div className="bg-red-800 w-screen"></div>
      </div>
    </>
  );
}

export default HeroSection;
