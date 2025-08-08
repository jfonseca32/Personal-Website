import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandInstagram,
  TbMail,
} from "react-icons/tb";

export default function SocialBar() {
  return (
    <div className="mt-2 flex">
      <a
        href="https://www.linkedin.com/in/danny-hagenlocker"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandLinkedin className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="https://github.com/dannyhagenlocker"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandGithub className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="https://www.instagram.com/dannyhagenlocker/"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandInstagram className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="mailto:dhagenlo@stanford.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbMail className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
    </div>
  );
}
