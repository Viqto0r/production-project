import { Counter } from 'entitites/Counter'
import { useTranslation } from 'react-i18next'

export default function MainPage() {
  const { t } = useTranslation()

  return (
    <div>
      <div>{t('главная страница')}</div>
      <Counter />
    </div>
  )
}
