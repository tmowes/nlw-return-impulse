import bugImg from '../../../assets/bug.svg'
import ideaImg from '../../../assets/idea.svg'
import thoughtImg from '../../../assets/thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImg,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImg,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes
