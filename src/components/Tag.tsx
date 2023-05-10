import { FiX } from 'react-icons/fi'

interface TagProps {
  label: string
}

export function Tag(props: TagProps) {
  return (
    <span className=" flex items-center gap-4 w-fit bg-[#312E38] p-4 text-[#E5E5E5] text-base rounded-xl">
      {props.label}
      <span className='text-[#FF859B]'>
        <FiX size={22}/>
      </span>
    </span>
  )
}
