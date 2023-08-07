import { ComponentProps } from 'react'

import stars from '../../assets/stars.svg'

interface MoviePreviewTitleProps extends ComponentProps<'div'> {
  title: string
}

export function MoviePreviewTitle({ title }: MoviePreviewTitleProps) {
  return (
    <>
      <div>
        <h3 className="mb-2 text-left text-2xl font-bold text-[#F4EDE8]">
          {title}
        </h3>
        <img src={stars} alt="star icon" />
      </div>
    </>
  )
}
