import { ArrowLeft } from 'phosphor-react'

import { BackButttonProps } from './types'

export function BackButton(props: BackButttonProps) {
  const { action } = props
  return (
    <button
      type="button"
      onClick={action}
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
    >
      <ArrowLeft weight="bold" className="w-6 h-6" />
    </button>
  )
}
