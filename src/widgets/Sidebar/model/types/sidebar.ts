import { type ISidebarItemProps } from '../../ui/SidebarItem/SidebarItem'

export type TSidebarItems = Array<Omit<ISidebarItemProps, 'collapsed'>>
