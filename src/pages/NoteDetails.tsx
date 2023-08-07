import { FiClock } from 'react-icons/fi'
import starsImage from '../assets/stars.svg'

import { ButtonText } from '../components/ButtonText'
import { Header } from '../components/Header'

import { useNavigate } from 'react-router-dom'

export function NoteDetails() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <>
      <Header.Root>
        <Header.Search />
        <Header.Profile />
      </Header.Root>

      <main className="mx-auto flex h-[85vh] max-w-6xl flex-col gap-10 overflow-auto p-4">
        <div className="mt-10 flex w-fit flex-col gap-6">
          <ButtonText placeholder="Voltar" haveIcon onClick={handleBack} />

          <div className="flex items-center gap-5">
            <h1 className="text-4xl font-medium text-[#F4EDE8] ">
              Interestellar
            </h1>
            <img src={starsImage} alt="Imagem de estrelas" />
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 text-[#F4EDE8] ">
              <img
                src="https://github.com/EduVieira131.png"
                alt="Imagem de perfil do usuário"
                className="h-4 w-4 rounded-full border-2 border-[#3E3B47]"
              />
              <p>Por Eduardo Vieira</p>
            </span>

            <span className="flex items-center gap-2 text-[#F4EDE8] ">
              <p className="text-[#FF859B]">
                <FiClock />
              </p>
              <p>10/05/23 às 08:00</p>
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <span className="rounded-lg bg-[#282124] px-4 py-2 text-xs text-[#E5E5E5]">
            Ficção científica
          </span>
          <span className="rounded-lg bg-[#282124] px-4 py-2 text-xs text-[#E5E5E5]">
            Drama
          </span>
          <span className="rounded-lg bg-[#282124] px-4 py-2 text-xs text-[#E5E5E5]">
            Família
          </span>
        </div>

        <p className="text-[#F4EDE8]">
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
          uma inteligência desconhecida que está enviando mensagens codificadas
          através de radiação gravitacional, deixando coordenadas em binário que
          os levam até uma instalação secreta da NASA liderada pelo professor
          John Brand. O cientista revela que um buraco de minhoca foi aberto
          perto de Saturno e que ele leva a planetas que podem oferecer
          condições de sobrevivência para a espécie humana. As "missões Lázaro"
          enviadas anos antes identificaram três planetas potencialmente
          habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann
          - nomeados em homenagem aos astronautas que os pesquisaram. Brand
          recruta Cooper para pilotar a nave espacial Endurance e recuperar os
          dados dos astronautas; se um dos planetas se mostrar habitável, a
          humanidade irá seguir para ele na instalação da NASA, que é na
          realidade uma enorme estação espacial. A partida de Cooper devasta
          Murphy. <br /> <br />
          Além de Cooper, a tripulação da Endurance é formada pela bióloga
          Amelia, filha de Brand; o cientista Romilly, o físico planetário
          Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e
          se dirigem a Miller, porém descobrem que o planeta possui enorme
          dilatação gravitacional temporal por estar tão perto de Gargântua:
          cada hora na superfície equivale a sete anos na Terra. Eles entram em
          Miller e descobrem que é inóspito já que é coberto por um oceano raso
          e agitado por ondas enormes. Uma onda atinge a tripulação enquanto
          Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a
          partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que
          23 anos se passaram.
        </p>
      </main>
    </>
  )
}
