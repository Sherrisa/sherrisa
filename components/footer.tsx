import Link from "next/link";
import { PiMailboxFill, PiPhoneCallFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto bg-wildflowergreen py-8 flex justify-center gap-x-10 sm:gap-x-20">
        <Link href="tel:2533926385" target="_blank">
          <PiPhoneCallFill
            size={"1.5rem"}
            color="#fff"
            className="footerIcon"
          />
        </Link>
        <Link href="mailto:sherrisaclasson@outlook.com" target="_blank">
          <PiMailboxFill size={"1.5rem"} color="#fff" className="footerIcon" />
        </Link>
        <Link href="https://www.linkedin.com/in/sherrisa/" target="_blank">
          <FaLinkedin size={"1.5rem"} color="#fff" className="footerIcon" />
        </Link>
        <Link href="https://github.com/Sherrisa" target="_blank">
          <FaGithub size={"1.5rem"} color="#fff" className="footerIcon" />
        </Link>
        <Link href="https://codepen.io/sherrisa" target="_blank">
          <FaCodepen size={"1.5rem"} color="#fff" className="footerIcon" />
        </Link>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center items-center h-10 bg-white text-black">
        <small>&copy; Sherrisa Classon 2024</small>
      </div>
    </footer>
  );
}
