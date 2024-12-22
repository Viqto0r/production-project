import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { EButtonTheme } from '@/shared/ui/Button/ui/Button'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text } from '@/shared/ui/Text'
import { ETextTheme } from '@/shared/ui/Text/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {
  DynamicModuleLoader,
  type TReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface ILoginFormProps {
  onSuccess: () => void
  className?: string
}

const asyncReducers: TReducerList = { loginForm: loginReducer }

const LoginForm: FC<ILoginFormProps> = memo(({ onSuccess, className }) => {
  const { t } = useTranslation()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const dispatch = useAppDispatch()

  const handleChangeUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(e.target.value))
    },
    [dispatch]
  )

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setPassword(e.target.value))
    },
    [dispatch]
  )

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password, onSuccess])

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('форма авторизации')} />
        {error && (
          <Text
            text={t('вы ввели неверный логин или пароль')}
            theme={ETextTheme.ERROR}
          />
        )}
        <Input
          value={username}
          onChange={handleChangeUsername}
          placeholder="username"
          maxLength={25}
          autoFocus
        />
        <Input
          value={password}
          onChange={handleChangePassword}
          placeholder="password"
          type="password"
          maxLength={25}
        />
        <Button
          className={cls.loginBtn}
          theme={EButtonTheme.OUTLINE}
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          {t('войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
