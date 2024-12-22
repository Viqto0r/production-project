import { createSelector } from '@reduxjs/toolkit'
import { EUserRole } from '../../consts/consts'
import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => !!roles?.includes(EUserRole.ADMIN)
)

export const isUserManager = createSelector(
  getUserRoles,
  (roles) => !!roles?.includes(EUserRole.MANAGER)
)
