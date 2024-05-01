import { type FC } from 'react'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from 'features/AuthByUsername'

interface ILoginForm {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginForm> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  )
}
