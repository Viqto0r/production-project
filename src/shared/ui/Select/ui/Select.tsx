import {
  type ChangeEvent,
  memo,
  useMemo,
  type FC,
  type SelectHTMLAttributes,
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export enum ESelectTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ISelectOption {
  value: string
  content: string
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  label?: string
  options?: ISelectOption[]
  value?: string
  theme?: ESelectTheme
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  readOnly?: boolean
}

export const Select: FC<ISelectProps> = memo((props) => {
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

  return (
    <div className={classNames(cls.Wrapper, {}, [className, cls[theme]])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChange}
        disabled={readOnly}
        {...otherProps}
      >
        {optionList}
      </select>
    </div>
  )
})
