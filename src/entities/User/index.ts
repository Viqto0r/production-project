export { userActions, userReducer } from './model/slice/userSlice'
export { type IUserSchema, EUserRole } from './model/types/userSchema'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserIsInit } from './model/selectors/getUserIsInit/getUserIsInit'
export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from './model/selectors/getUserRoles/getUserRoles'
export type { IUser } from './model/consts/consts'
