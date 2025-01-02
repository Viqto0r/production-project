import { classNames, TMods } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  forwardRef,
  memo,
  ReactNode,
  type FC,
  type InputHTMLAttributes,
} from 'react'
import { HStack } from '../../Stack'
import { Text } from '../../Text'

type THTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly' | 'size'
>

type TInputSize = 's' | 'm' | 'l'

interface IInputProps extends THTMLInputProps {
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  readonly?: boolean
  validate?: (value: string) => boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  label?: string
  size?: TInputSize
}

const InputComponent: FC<IInputProps> = forwardRef((props, ref) => {
  const {
    onChange,
    value,
    className,
    placeholder,
    readonly,
    validate,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validate && !validate?.(value)) return
    onChange?.(e)
  }

  const mods: TMods = {
    [cls.readonly]: readonly,
    [cls['with-addon-left']]: !!addonLeft,
    [cls['with-addon-right']]: !!addonRight,
  }

  const input = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
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

  if (label) {
    return (
      <HStack max gap="8">
        <Text text={`${label}:`} />
        {input}
      </HStack>
    )
  }

  return input
})

export const Input = memo(InputComponent)
