import { ComponentProps, ReactNode } from 'react'

interface TagButtonRootProps extends ComponentProps<'div'> {
  children: ReactNode
  addTagStyle?: boolean
}

export function TagButtonRoot({ children, addTagStyle }: TagButtonRootProps) {
  return (
    <div
      className={
        !addTagStyle
          ? 'flex w-fit items-center gap-2 rounded-xl border-2 border-dashed border-[#948F99] p-3 text-[#948F99]'
          : 'flex w-fit items-center gap-4 rounded-xl bg-[#312E38] p-4 text-base text-[#E5E5E5]'
      }
    >
      {children}
    </div>
  )
}
