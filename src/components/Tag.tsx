interface TagProps {
  label: string;
}

export function Tag(props:TagProps) {
  return (
    <span className="bg-[#312E38] text-[#E5E5E5] text-xs px-4 py-1 rounded-lg">
      {props.label}
    </span>
  )
}