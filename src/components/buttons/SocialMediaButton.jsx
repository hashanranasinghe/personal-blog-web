import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { color } from "framer-motion";
const SocialMediaButton = ({ link, bgColor, icon })=>{
    return(
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
        className={`relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded ${bgColor} hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10`}
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {icon}
        </span>
      </button>
      </a>
    )
}
export default SocialMediaButton