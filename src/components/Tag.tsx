interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span className=" flex w-fit items-center rounded-lg bg-[#312E38] px-4 py-1 text-sm text-[#E5E5E5]">
      {label}
    </span>
  )
}
