import { type ISidebarItemProps } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

export type TSidebarItems = Array<Omit<ISidebarItemProps, 'collapsed'>>
