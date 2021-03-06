import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('md:container', 'mx-auto', 'pb-10', 'py-4')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
