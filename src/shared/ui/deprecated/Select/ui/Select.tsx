import { type ChangeEvent, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export enum ESelectTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ISelectOption<T> {
  value: T
  content: string
}

export interface ISelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<ISelectOption<T>>
  value?: T
  theme?: ESelectTheme
  onChange?: (value: T) => void
  readOnly?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = <T extends string>(props: ISelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    theme = ESelectTheme.LIGHT,
    readOnly,
    ...otherProps
  } = props

  const optionList = useMemo(
    () =>
      options?.map(({ content, value }) => (
        <option key={value} value={value} className={cls.option}>
          {content}
        </option>
      )),
    [options]
  )

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  return (
    <div className={classNames(cls.Wrapper, {}, [className, cls[theme]])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={handleChange}
        disabled={readOnly}
        {...otherProps}
      >
        {optionList}
      </select>
    </div>
  )
}
