import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
}

export const storeDecorator =
  (
    initialState: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  ) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={initialState as IStateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  )
