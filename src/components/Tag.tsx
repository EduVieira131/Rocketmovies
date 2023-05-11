interface TagProps {
  label: string
}

export function Tag(props: TagProps) {
  return (
    <span className=" flex items-center w-fit bg-[#312E38] px-4 py-1 text-[#E5E5E5] text-sm rounded-lg">
      {props.label}
    </span>
  )
}
