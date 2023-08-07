import { ComponentProps } from 'react'
import { Tag } from '../Tag'

interface MoviewPreviewTagsProps extends ComponentProps<'div'> {
  tags: object[]
}

export function MoviePreviewTags({ tags }: MoviewPreviewTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => {
        return <Tag label={tag.name} key={tags.indexOf(tag)} />
      })}
    </div>
  )
}
