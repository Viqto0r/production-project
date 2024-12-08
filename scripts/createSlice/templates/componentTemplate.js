const componentTemplate = (slice) => {
  return `import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './${slice}.module.scss'
import { useTranslation } from 'react-i18next'

interface I${slice}Props {
  className?: string
}

export const ${slice}: FC<I${slice}Props> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  return <div className={classNames(cls.${slice}, {}, [className])}></div>
})
`
}

module.exports = { componentTemplate }
