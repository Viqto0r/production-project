import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { Text } from 'shared/ui/Text'
import { ETextTheme } from 'shared/ui/Text/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface ILoginFormProps {
  className?: string
}

const asyncReducers: TReducerList = { loginForm: loginReducer }

const LoginForm: FC<ILoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

  const dispatch = useDispatch()

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={asyncReducers} removeAfterunmount>
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
