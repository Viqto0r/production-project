import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

type TActionCreator<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => IStateSchema
  actionCreator: TActionCreator<Return, Arg, RejectedValue>

  constructor(actionCreator: TActionCreator<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.actionCreator = actionCreator
  }

  async callThunk(args: Arg) {
    const action = this.actionCreator(args)
    return await action(this.dispatch, this.getState, undefined)
  }
}
