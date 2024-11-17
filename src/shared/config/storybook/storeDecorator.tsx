import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import { type TReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: TReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
}

export const storeDecorator =
  (initialState: DeepPartial<IStateSchema>, asyncReducers?: TReducerList) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={initialState as IStateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  )
