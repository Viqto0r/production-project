import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { useTranslation } from 'react-i18next'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'
import {
  DynamicModuleLoader,
  type TReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'

export interface IAddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const asyncReducers: TReducerList = { addCommentForm: addCommentFormReducer }

const AddCommentForm: FC<IAddCommentFormProps> = memo((props) => {
  const { className, onSendComment } = props
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()

  const text = useSelector(getAddCommentFormText)

  const handleCommentTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(addCommentFormActions.setText(e.target.value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    onSendComment(text)
    dispatch(addCommentFormActions.setText(''))
  }, [dispatch, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="round" fullWidth>
            <HStack
              justify="between"
              max
              className={className}
              data-testid="AddCommentForm"
              gap="16"
            >
              <Input
                className={cls.input}
                placeholder={t('введите текст комментария')}
                value={text}
                onChange={handleCommentTextChange}
                data-testid="AddCommentForm.Input"
              />
              <Button
                onClick={onSendHandler}
                data-testid="AddCommentForm.Button"
              >
                {t('отправить')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
            data-testid="AddCommentForm"
          >
            <InputDeprecated
              className={cls.input}
              placeholder={t('введите текст комментария')}
              value={text}
              onChange={handleCommentTextChange}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              onClick={onSendHandler}
              data-testid="AddCommentForm.Button"
            >
              {t('отправить')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
