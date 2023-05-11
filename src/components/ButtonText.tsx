import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface ButtonTextProps {
  placeholder: string
  to: string
  haveIcon?: boolean
}

export function ButtonText(props: ButtonTextProps) {
  return (
    <Link
      to={props.to}
      className="flex items-center justify-center gap-2 w-fit text-[#FF859B]"
    >
      {props.haveIcon ? <FiArrowLeft /> : ''} {props.placeholder}
    </Link>
  )
}
