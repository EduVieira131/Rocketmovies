import { FiClock } from 'react-icons/fi'
import emptyStar from '../assets/emptyStar.svg'
import fullStar from '../assets/fullStar.svg'

import { ButtonText } from '../components/ButtonText'
import { Header } from '../components/Header'
import { api } from '../services/api'
import { Tag } from '../components/Tag'
import { useAuth } from '../hooks/auth'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface authProps {
  signOut?: any
  user?: any
}

export function NoteDetails() {
  const { signOut, user }: authProps = useAuth()

  const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`

  const [notes, setNotes] = useState<Array<object>>([])
  const [tags, setTags] = useState<Array<object>>([])

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function renderRating() {
    const rating = notes.rating
    const ratingList = []

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
        className="h-5 w-5"
      />
    ))
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setNotes(response.data)
      setTags(response.data.tags)
    }

    fetchNote()
  }, [])

  return (
    <>
      <Header.Root>
        <Header.Search />
        <Header.Profile />
      </Header.Root>

      {notes && (
        <main className="mx-auto flex h-[85vh] max-w-6xl flex-col gap-10 overflow-auto p-4">
          <div className="mt-10 flex w-fit flex-col gap-6">
            <ButtonText placeholder="Voltar" haveIcon onClick={handleBack} />

            <div className="flex items-center gap-5">
              <h1 className="text-4xl font-medium text-[#F4EDE8] ">
                {notes.title}
              </h1>

              <div className="flex gap-2">{renderRating()}</div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 text-[#F4EDE8] ">
                <img
                  src={avatarUrl}
                  alt="Imagem de perfil do usuário"
                  className="h-4 w-4 rounded-full border-2 border-[#3E3B47]"
                />
                <p>Por {user.name}</p>
              </span>

              <span className="flex items-center gap-2 text-[#F4EDE8] ">
                <p className="text-[#FF859B]">
                  <FiClock />
                </p>
                <p>{notes.created_at}</p>
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag label={tag.name} key={tag.id} />
            ))}
          </div>

          <p className="text-[#F4EDE8]">{notes.description}</p>
        </main>
      )}
    </>
  )
}
