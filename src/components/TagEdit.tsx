import { FiX } from 'react-icons/fi'

interface TagProps {
  label: string
}

export function TagEdit(props: TagProps) {
  return (
    <span className=" flex items-center gap-4 w-fit bg-[#312E38] p-4 text-[#E5E5E5] text-base rounded-xl">
      {props.label}
      <button className='text-[#FF859B]'>
        <FiX size={22}/>
      </button>
    </span>
  )
}
