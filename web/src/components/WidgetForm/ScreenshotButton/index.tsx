import { useCallback, useState } from 'react'

import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'

import { Loading } from '../../Loading'
import { ScreenshotButtonProps } from './types'

export function ScreenshotButton(props: ScreenshotButtonProps) {
  const { screenshot, setScreenshot } = props
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(true)

  const onTakeScreenshot = useCallback(async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    setScreenshot(base64image)
    setIsTakingScreenshot(false)
  }, [setScreenshot])

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => setScreenshot(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      onClick={onTakeScreenshot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}
