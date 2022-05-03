/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react'

import { FeedbackContentStep } from './FeedbackContentStep'
import { FeedbackSuccessStep } from './FeedbackSuccessStep'
import { FeedbackTypeStep } from './FeedbackTypeStep'
import { FeedbackType } from './FeedbackTypeStep/feedbackTypes'

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep setFeedbackType={setFeedbackType} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              setFeedbackType={setFeedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a className="underline underline-offset-2" href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
