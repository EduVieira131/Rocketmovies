import { ComponentProps } from 'react'

import emptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'
interface MoviePreviewTitleProps extends ComponentProps<'div'> {
  title: string
  noteRating: number
}

export function MoviePreviewTitle({
  title,
  noteRating,
}: MoviePreviewTitleProps) {
  const rating = noteRating
  const ratingList: Array<string> = []

  function renderRating() {
    for (let index = 0; index < rating; index++) {
      ratingList.push('true')
    }

    if (ratingList.length < 5) {
      while (ratingList.length !== 5) {
        ratingList.push('false')
      }
    }

    return ratingList.map((value, index) => (
      <img
        src={value === 'true' ? fullStar : emptyStar}
        alt="Imagem de estrelas"
        key={index}
        className="h-4 w-4"
      />
    ))
  }

  return (
    <>
      <div>
        <h3 className="mb-2 text-left text-2xl font-bold text-[#F4EDE8]">
          {title}
        </h3>

        <div className="flex gap-1">{renderRating()}</div>
      </div>
    </>
  )
}
