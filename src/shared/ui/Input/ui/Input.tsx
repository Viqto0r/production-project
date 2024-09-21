import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  memo,
  useCallback,
  useMemo,
  useState,
  type FC,
  type InputHTMLAttributes,
} from 'react'
import { debounce } from 'shared/lib/debounce/debounce'

type THTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>

const symbolLength = 8.8

interface IInputProps extends THTMLInputProps {
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  readOnly?: boolean
  validate?: (value: string) => boolean
}

export const Input: FC<IInputProps> = memo(
  ({
    onChange,
    value,
    className,
    placeholder,
    readOnly,
    validate,
    maxLength = 300,
    ...otherProps
  }) => {
    const [select, setSelect] = useState(value.length)
    const [caretFreeze, setCarretFreeze] = useState(false)

    const debouncedCarretFreeze = useMemo(
      () =>
        debounce(() => {
          setCarretFreeze(false)
        }, 200),
      []
    )

    const replaceCarret = useCallback(
      (selectionStart: number) => {
        const newRange = selectionStart * symbolLength
        const maxRange = (maxLength - 1) * symbolLength

        setSelect(newRange < maxRange ? newRange : maxRange)
      },
      [maxLength]
    )

    const handleSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
      if (e.target instanceof HTMLInputElement) {
        replaceCarret(e.target.selectionStart || 0)
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { selectionStart, value },
      } = e
      if (validate && !validate?.(value)) return

      replaceCarret(selectionStart || 0)
      setCarretFreeze(true)
      onChange?.(e)
      debouncedCarretFreeze()
    }

    return (
      <div className={classNames(cls.Input, {}, [className])}>
        {placeholder && (
          <span className={cls.placeholder}>
            {placeholder}
            {'>'}
          </span>
        )}
        <div
          className={classNames(cls.wrapper, { [cls.readonly]: readOnly }, [])}
        >
          <input
            onChange={handleChange}
            onSelect={handleSelect}
            value={value}
            readOnly={readOnly}
            maxLength={maxLength}
            {...otherProps}
          />
          {!readOnly && (
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
          )}
        </div>
      </div>
    )
  }
)
