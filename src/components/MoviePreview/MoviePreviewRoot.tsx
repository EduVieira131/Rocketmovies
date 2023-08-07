import { ComponentProps } from 'react'

type MoviePreviewProps = ComponentProps<'button'>

export function MoviePreviewRoot({ children, ...rest }: MoviePreviewProps) {
  return (
    <button
      className="flex flex-col gap-4 rounded-2xl bg-[#FF859B]/5 p-8"
      {...rest}
    >
      {children}
    </button>
  )
}
