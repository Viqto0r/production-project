import { Suspense, type FC } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Loader } from '@/shared/ui/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface ILoginForm {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginForm> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        {<LoginFormAsync onSuccess={onClose} />}
      </Suspense>
    </Modal>
  )
}
