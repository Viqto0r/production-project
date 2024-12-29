import { createPortal } from 'react-dom'
import { type ReactNode, type FC } from 'react'

interface IPortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FC<IPortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element)
}
