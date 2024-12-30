import { Listbox as HListbox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import popupCls from '../../../styles/popup.module.scss'
import { Fragment, useMemo, type ReactNode } from 'react'
import { classNames } from '../../../../../../lib/classNames/classNames'
import { type TDropdownDirection } from '../../../../../../types/ui'
import { Button } from '../../../../Button'
import { HStack } from '../../../../../redesigned/Stack'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { Icon } from '../../../../Icon'

export interface IListBoxItem<T extends string> {
  value: T
  content: ReactNode
  disabled?: boolean
}

interface IListBoxProps<T extends string> {
  items?: Array<IListBoxItem<T>>
  className?: string
  value?: T
  defaultValue?: string
  onChange: (value: T) => void
  readOnly?: boolean
  direction?: TDropdownDirection
  label?: string
}

export const ListBox = <T extends string>(props: IListBoxProps<T>) => {
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

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value)?.content,
    [items, value]
  )

  return (
    <HStack gap="4">
      {label && <span>{`${label}:`}</span>}
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
          <Button
            variant="filled"
            disabled={readOnly}
            addonRight={<Icon Svg={ArrowIcon} />}
          >
            {selectedItem ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [
            popupCls[direction],
            popupCls.menu,
          ])}
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
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: disabled,
                    [popupCls.selected]: selected,
                  })}
                >
                  <span className={cls.check}>
                    {selected && (
                      <Icon Svg={ArrowIcon} width={32} height={32} />
                    )}
                  </span>
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
