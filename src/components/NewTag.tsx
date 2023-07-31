import { FiPlus } from 'react-icons/fi'

export function NewTag() {
  return (
    <button className="flex items-center gap-4 text-[#948F99] border-2 border-[#948F99] border-dashed rounded-xl p-3">
      Novo marcador
      <span className="text-[#FF859B]">
        <FiPlus size={22} />
      </span>
    </button>
  )
}
