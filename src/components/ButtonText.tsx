import { FiArrowLeft } from "react-icons/fi";

interface ButtonTextProps {
  placeholder: string;
  haveIcon?: boolean;
}

export function ButtonText(props:ButtonTextProps) {
  return (
    <a href="#" className="flex items-center justify-center gap-2 w-fit text-[#FF859B]">
      {props.haveIcon ? <FiArrowLeft /> : ''} {props.placeholder}
    </a>
  )
}
