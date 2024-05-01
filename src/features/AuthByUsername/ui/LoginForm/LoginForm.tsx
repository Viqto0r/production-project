import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useCallback, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ILoginFormProps {
  className?: string
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = useCallback((value: string) => {
    setUsername(value)
  }, [])

  const handleChangePassword = useCallback((value: string) => {
    setPassword(value)
  }, [])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        value={username}
        onChange={handleChangeUsername}
        placeholder='username'
        maxLength={25}
        autoFocus
      />
      <Input
        value={password}
        onChange={handleChangePassword}
        placeholder='password'
        type='password'
        maxLength={25}
      />

      <Button className={cls.loginBtn}>{t('войти')}</Button>
    </div>
  )
}
