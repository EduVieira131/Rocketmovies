import { Link } from 'react-router-dom'
import { Tag } from './Tag'

import stars from '../assets/stars.svg'

export function MovieCard() {
  return (
    <Link
      to="/notes/1"
      className="flex flex-col gap-4 p-8 bg-[#FF859B]/5 rounded-2xl"
    >
      <div>
        <h3 className="text-[#F4EDE8] font-bold text-2xl mb-2">
          Interestellar
        </h3>

        <img src={stars} />
      </div>

      <p className="text-[#999591]">
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta se...
      </p>

      <div className="flex gap-2">
        <Tag label="Ficção científica" />
        <Tag label="Drama" />
        <Tag label="Família" />
      </div>
    </Link>
  )
}
