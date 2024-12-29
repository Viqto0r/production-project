import { Listbox as HListbox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import popupCls from '../../../styles/popup.module.scss'
import { type FC, Fragment, type ReactNode } from 'react'
import { classNames } from '../../../../../../lib/classNames/classNames'
import { type TDropdownDirection } from '../../../../../../types/ui'
import { Button } from '../../../../Button'
import { HStack } from '../../../../Stack'

export interface IListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface IListBoxProps {
  items?: IListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readOnly?: boolean
  direction?: TDropdownDirection
  label?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox: FC<IListBoxProps> = (props) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readOnly,
    direction = 'bottom-right',
    label,
  } = props

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListbox
        disabled={readOnly}
        as="div"
        className={classNames('', {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        <HListbox.Button
          as="fieldset"
          className={popupCls.trigger}
          disabled={readOnly}
        >
          <Button disabled={readOnly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [popupCls[direction]])}
        >
          {items?.map(({ value, content, disabled }) => (
            <HListbox.Option
              key={value}
              value={value}
              as={Fragment}
              disabled={disabled}
            >
              {({ selected, active, disabled }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: disabled,
                    },
                    []
                  )}
                >
                  <span className={cls.check}>{selected && '✔️'}</span>
                  {content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  )
}
