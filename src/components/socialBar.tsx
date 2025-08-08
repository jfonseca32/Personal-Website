import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbMail,
} from "react-icons/tb";

export default function SocialBar() {
  return (
    <div className="mt-2 flex">
      <a
        href="https://www.linkedin.com/in/joao-pedro-dudziak-fonseca"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandLinkedin className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="https://github.com/jfonseca32"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandGithub className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="mailto:jfonseca32@gatech.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbMail className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
    </div>
  );
}
