import { Dispatch, SetStateAction } from 'react'

export type ScreenshotButtonProps = {
  screenshot: string | null
  setScreenshot: Dispatch<SetStateAction<string | null>>
}
