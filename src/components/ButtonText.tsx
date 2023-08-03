import { FiArrowLeft } from 'react-icons/fi'

interface ButtonTextProps {
  placeholder: string
  haveIcon?: boolean
}

export function ButtonText({
  placeholder,
  haveIcon,
  ...rest
}: ButtonTextProps) {
  return (
    <button
      className="flex w-fit items-center justify-center gap-2 text-[#FF859B]"
      {...rest}
    >
      {haveIcon ? <FiArrowLeft /> : ''} {placeholder}
    </button>
  )
}
