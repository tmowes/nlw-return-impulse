import { FormEvent, useCallback, useState } from 'react'

import { Camera } from 'phosphor-react'

import { BackButton } from '../../BackButton'
import { CloseButton } from '../../CloseButton'
import { feedbackTypes } from '../FeedbackTypeStep/feedbackTypes'
import { ScreenshotButton } from '../ScreenshotButton'
import { FeedbackContentStepProps } from './types'

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const { feedbackType, onResetSteps, onFeedbackSent } = props
  const { title, image } = feedbackTypes[feedbackType]

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string | null>(null)

  const onSubmitFeedback = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!comment?.trim()) {
        return
      }

      console.log({ screenshot, comment })

      onFeedbackSent()
    },
    [comment, onFeedbackSent, screenshot],
  )

  return (
    <>
      <header className="flex">
        <BackButton action={onResetSteps} />
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={onSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={({ target }) => setComment(target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton screenshot={screenshot} setScreenshot={setScreenshot} />
          <button
            type="submit"
            disabled={!comment?.trim()}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
