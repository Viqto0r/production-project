import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import axios, { type AxiosStatic } from 'axios'

type TActionCreator<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => IStateSchema
  actionCreator: TActionCreator<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  constructor(actionCreator: TActionCreator<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.actionCreator = actionCreator
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(args: Arg) {
    const action = this.actionCreator(args)
    return await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    })
  }
}
