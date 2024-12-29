import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

type TSvgProps = Omit<React.SVGAttributes<SVGElement>, 'onClick'>

interface IIconBaseProps extends TSvgProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

interface INonClickableIconProps extends IIconBaseProps {
  clickable?: false
}

interface IClickableIconProps extends IIconBaseProps {
  clickable: true
  onClick: () => void
}

type TIconProps = INonClickableIconProps | IClickableIconProps

export const Icon: FC<TIconProps> = memo((props) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button
        onClick={props.onClick}
        className={cls.button}
        style={{ width, height }}
      >
        {icon}
      </button>
    )
  }

  return icon
})
