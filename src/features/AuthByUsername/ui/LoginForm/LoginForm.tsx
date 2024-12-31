import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { EButtonTheme } from '@/shared/ui/deprecated/Button/ui/Button'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ETextTheme } from '@/shared/ui/deprecated/Text/ui/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import {
  DynamicModuleLoader,
  type TReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

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
  const forceUpdate = useForceUpdate()

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
      forceUpdate()
    }
  }, [dispatch, username, password, onSuccess, forceUpdate])

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            className={classNames(cls.LoginFormRedesigned, {}, [className])}
            gap="16"
          >
            <Text title={t('форма авторизации')} />
            {error && (
              <Text
                text={t('вы ввели неверный логин или пароль')}
                variant="error"
              />
            )}
            <Input
              value={username}
              onChange={handleChangeUsername}
              placeholder={t('имя пользователя')}
              maxLength={25}
              autoFocus
            />
            <Input
              value={password}
              onChange={handleChangePassword}
              placeholder={t('пароль')}
              type="password"
              maxLength={25}
            />
            <Button
              className={cls.loginBtn}
              onClick={handleLoginClick}
              disabled={isLoading}
            >
              {t('войти')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t('вы ввели неверный логин или пароль')}
                theme={ETextTheme.ERROR}
              />
            )}
            <InputDeprecated
              className={cls.input}
              value={username}
              onChange={handleChangeUsername}
              placeholder={t('имя пользователя')}
              maxLength={25}
              autoFocus
            />
            <InputDeprecated
              className={cls.input}
              value={password}
              onChange={handleChangePassword}
              placeholder={t('пароль')}
              type="password"
              maxLength={25}
            />
            <ButtonDeprecated
              className={cls.loginBtn}
              theme={EButtonTheme.OUTLINE}
              onClick={handleLoginClick}
              disabled={isLoading}
            >
              {t('войти')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  )
})

export default LoginForm
