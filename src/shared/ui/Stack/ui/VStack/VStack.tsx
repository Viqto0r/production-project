import { type FC } from 'react'
import { Flex, type IFlexProps } from '../Flex/Flex'

type THStackProps = Omit<IFlexProps, 'direction'>

export const VStack: FC<THStackProps> = (props) => {
  const { children, align = 'start' } = props

  return (
    <Flex {...props} align={align} direction="column">
      {children}
    </Flex>
  )
}
