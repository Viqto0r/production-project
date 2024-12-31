import { memo, type FC, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../../../deprecated/Button'
import CopyIconDeprecated from '@/shared/assets/icons/copy-20-20.svg'
import CopyIcon from '@/shared/assets/icons/copy.svg'
import { EButtonTheme } from '../../../deprecated/Button/ui/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '../../Icon'

interface ICodeProps {
  className?: string
  text: string
}

export const Code: FC<ICodeProps> = memo((props) => {
  const { className, text } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            Svg={CopyIcon}
            className={cls.copyBtn}
            clickable
            onClick={onCopy}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            className={cls.copyBtn}
            theme={EButtonTheme.CLEAR}
            onClick={onCopy}
          >
            <CopyIconDeprecated />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  )
})
