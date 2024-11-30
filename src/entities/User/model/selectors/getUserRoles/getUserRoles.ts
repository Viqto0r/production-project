import { createSelector } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { EUserRole } from '../../types/userSchema'

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) => !!roles?.includes(EUserRole.ADMIN)
)

export const isUserManager = createSelector(
  getUserRoles,
  (roles) => !!roles?.includes(EUserRole.MANAGER)
)
