import { FiX, FiPlus } from 'react-icons/fi'
import { ComponentProps } from 'react'

interface TagButtonActionProps extends ComponentProps<'button'> {
  editable?: boolean
}

export function TagButtonAction({ editable, ...rest }: TagButtonActionProps) {
  return (
    <button className="text-[#FF859B]" {...rest}>
      {editable ? <FiPlus size={22} /> : <FiX size={22} />}
    </button>
  )
}
