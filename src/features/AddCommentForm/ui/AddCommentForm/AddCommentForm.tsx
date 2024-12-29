import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from '@/shared/ui/deprecated/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/deprecated/Button'
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
import { HStack } from '@/shared/ui/deprecated/Stack'

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
      <HStack
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
        data-testid="AddCommentForm"
      >
        <Input
          className={cls.input}
          placeholder={t('введите текст комментария')}
          value={text}
          onChange={handleCommentTextChange}
          data-testid="AddCommentForm.Input"
        />
        <Button onClick={onSendHandler} data-testid="AddCommentForm.Button">
          {t('отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
