import { classNames, TMods } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { memo, ReactNode, type FC, type InputHTMLAttributes } from 'react'

type THTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>

interface IInputProps extends THTMLInputProps {
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  readonly?: boolean
  validate?: (value: string) => boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Input: FC<IInputProps> = memo(
  ({
    onChange,
    value,
    className,
    placeholder,
    readonly,
    validate,
    addonLeft,
    addonRight,
    ...otherProps
  }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (validate && !validate?.(value)) return
      onChange?.(e)
    }

    const mods: TMods = {
      [cls.readonly]: readonly,
      [cls['with-addon-left']]: !!addonLeft,
      [cls['with-addon-right']]: !!addonRight,
    }

    return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
        <div className={cls.addonLeft}>{addonLeft}</div>
        <input
          className={cls.input}
          onChange={handleChange}
          value={value}
          readOnly={readonly}
          placeholder={placeholder}
          {...otherProps}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
    )
  }
)
