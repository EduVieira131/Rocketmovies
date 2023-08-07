import { ComponentProps } from 'react'

interface MoviePreviewDetailsProps extends ComponentProps<'p'> {
  description: string
}

export function MoviePreviewDetails({ description }: MoviePreviewDetailsProps) {
  return <p className="text-[#999591]">{description}</p>
}
