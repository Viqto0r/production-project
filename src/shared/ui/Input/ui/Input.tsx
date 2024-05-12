import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  memo,
  useMemo,
  useState,
  type FC,
  type InputHTMLAttributes,
} from 'react'
import { debounce } from 'shared/lib/debounce/debounce'

type THTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
>

interface IInputProps extends THTMLInputProps {
  value: string
  onChange?: (value: string) => void
  className?: string
}

export const Input: FC<IInputProps> = memo(
  ({ onChange, value, className, placeholder, ...otherProps }) => {
    const [select, setSelect] = useState(value.length)
    const [caretFreeze, setCarretFreeze] = useState(false)

    const debouncedCarretFreeze = useMemo(
      () =>
        debounce(() => {
          setCarretFreeze(false)
        }, 200),
      []
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event

      setCarretFreeze(true)
      onChange?.(value)
      debouncedCarretFreeze()
    }

    const handleSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
      if (e.target instanceof HTMLInputElement) {
        const newRange = (e.target.selectionStart || 0) * 8.8

        setSelect(newRange < 308 ? newRange : 308)
      }
    }
    return (
      <div className={classNames(cls.Input, {}, [className])}>
        {placeholder && (
          <span className={cls.placeholder}>
            {placeholder}
            {'>'}
          </span>
        )}
        <div className={cls.wrapper}>
          <input
            onChange={handleChange}
            onSelect={handleSelect}
            value={value}
            {...otherProps}
          />
          <span
            className={classNames(
              cls.caret,
              { [cls.caretFreeze]: caretFreeze },
              []
            )}
            style={{
              left: `${select}px`,
            }}
          ></span>
        </div>
      </div>
    )
  }
)
