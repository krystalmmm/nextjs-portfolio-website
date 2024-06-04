import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const icon = <FontAwesomeIcon icon={faGithub} size="xs" />;

  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400 mt-4">
      <div>Designed and built by Krystal</div>
    </div>
  );
};

export default Footer;