import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const storeDecorator =
  (intialState: DeepPartial<IStateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={intialState as IStateSchema}>
      <Story />
    </StoreProvider>
  )
