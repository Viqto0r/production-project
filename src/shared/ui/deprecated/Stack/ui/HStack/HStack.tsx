import { type FC } from 'react'
import { Flex, type IFlexProps } from '../Flex/Flex'

type THStackProps = Omit<IFlexProps, 'direction'>

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack: FC<THStackProps> = (props) => {
  const { children } = props

  return (
    <Flex {...props} direction="row">
      {children}
    </Flex>
  )
}
