import { ECountry } from 'entities/CountrySelect'
import { EditableProfileCard } from './EditableProfileCard'
import { screen } from '@testing-library/react'
import { ECurrency } from 'entities/CurrencySelect'
import { type IProfile } from 'entities/Profile'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from 'shared/api/api'

const profile: IProfile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 33,
  currency: ECurrency.EUR,
  city: 'Moscow',
  country: ECountry.RUSSIA,
  username: 'admin123',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: { profile: profileReducer },
}

describe('features/EditableProfileCard', () => {
  test('Режим readonly должен переключиться', async () => {
    componentRender(<EditableProfileCard id="1" />, options)

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )

    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument()
  })

  test('При отмене значения обнуляются', async () => {
    componentRender(<EditableProfileCard id="1" />, options)

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    const firstNameInput = screen.getByTestId('ProfileCard.firstName')
    const lastNameInput = screen.getByTestId('ProfileCard.lastName')

    await userEvent.clear(firstNameInput)
    await userEvent.clear(lastNameInput)

    expect(firstNameInput).toHaveValue('')
    expect(lastNameInput).toHaveValue('')

    await userEvent.type(firstNameInput, 'test')
    await userEvent.type(lastNameInput, 'test')

    expect(firstNameInput).toHaveValue('test')
    expect(lastNameInput).toHaveValue('test')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    )

    expect(firstNameInput).toHaveValue('admin')
    expect(lastNameInput).toHaveValue('admin')
  })

  test('Должна появиться ошибка', async () => {
    componentRender(<EditableProfileCard id="1" />, options)

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    const firstNameInput = screen.getByTestId('ProfileCard.firstName')
    const lastNameInput = screen.getByTestId('ProfileCard.lastName')

    await userEvent.clear(firstNameInput)
    await userEvent.clear(lastNameInput)

    expect(firstNameInput).toHaveValue('')
    expect(lastNameInput).toHaveValue('')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toHaveTextContent('имя и фамилия обязательны')
  })

  test('Если нет ошибок валидации, то сервер должен уйти в PUT запрос', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    const mockPutReq = jest.spyOn($api, 'put')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    const firstNameInput = screen.getByTestId('ProfileCard.firstName')
    const lastNameInput = screen.getByTestId('ProfileCard.lastName')

    await userEvent.type(firstNameInput, 'test')
    await userEvent.type(lastNameInput, 'test')

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(mockPutReq).toHaveBeenCalled()
  })
})
