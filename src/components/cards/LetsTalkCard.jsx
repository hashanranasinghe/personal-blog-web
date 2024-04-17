import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SocialMediaButton from "../buttons/SocialMediaButton";
const LetsTalkCard = () => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Let`s Talk
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Because it`s about motivating the doers. Because I`m here to follow my
          dreams and inspire others.
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex gap-4">
          <SocialMediaButton
            link="https://linkedin.com/in/hashan-ranasinghe"
            bgColor="bg-[#0A66C2]"
            icon={<LinkedInIcon />}
          />
          <SocialMediaButton
            link="https://github.com/hashanranasinghe"
            bgColor="bg-[#333333]"
            icon={<GitHubIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default LetsTalkCard;
