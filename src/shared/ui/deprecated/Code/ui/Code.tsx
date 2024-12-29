import { memo, type FC, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '../../Button'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import { EButtonTheme } from '../../Button/ui/Button'

interface ICodeProps {
  className?: string
  text: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Code: FC<ICodeProps> = memo((props) => {
  const { className, text } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={EButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
})
