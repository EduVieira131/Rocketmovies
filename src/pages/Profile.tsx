import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

export function Profile() {
  return (
    <>
      <header className="bg-[#FF859B]/5 w-full h-36">
        <div className=" w-fit pt-16 ml-[12%]">
          <ButtonText placeholder="Voltar" haveIcon to='/'/>
        </div>
      </header>

      <main className="flex flex-col items-center mx-auto -mt-20 max-w-[340px] ">
        <div className="relative mb-16">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem do usuário"
            className="rounded-full w-[186px] h-[186px]"
          />

          <label
            htmlFor="avatar"
            className="absolute bottom-2 right-2 bg-[#FF859B] rounded-full p-4"
          >
            <FiCamera />

            <input type="file" id="avatar" className="hidden" />
          </label>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Input placeholder="Seu nome" icon={FiUser} />
          <Input placeholder="Seu e-mail" icon={FiMail} type='email'/>
          <span className="mt-6">
            <Input placeholder="Senha atual" icon={FiLock} type="password" />
          </span>
          <Input placeholder="Nova senha" icon={FiLock} type="password" />

          <span className="mt-6 w-full">
            <Button title="Salvar" />
          </span>
        </div>
      </main>
    </>
  )
}
