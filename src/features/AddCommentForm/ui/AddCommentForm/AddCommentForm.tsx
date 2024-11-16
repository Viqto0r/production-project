import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

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
    onSendComment(text)
    dispatch(addCommentFormActions.setText(''))
  }, [dispatch, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('введите текст комментария')}
          value={text}
          onChange={handleCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('отправить')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm