import { ComponentProps } from 'react'
import { Tag } from '../Tag'

interface MoviewPreviewTagsProps extends ComponentProps<'div'> {
  tags: string[]
}

export function MoviePreviewTags({ tags }: MoviewPreviewTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Tag label={tag} key={tags.indexOf(tag)} />
      ))}
    </div>
  )
}
