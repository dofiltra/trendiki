import { FC } from 'preact/compat'
import { Loading } from 'components/Loader'
import { auth } from 'services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useCallback, useEffect, useState } from 'preact/hooks'
import AuthContext, { User } from './AuthContext'

const AuthContextProvider: FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, (im) => {
      setIsInitialized(true)
      setUser(im)
    })
  }, [])

  const getContent = useCallback(() => {
    if (!isInitialized) {
      return <Loading />
    }

    return children
  }, [isInitialized, children])

  return (
    <AuthContext.Provider value={{ user }}>{getContent()}</AuthContext.Provider>
  )
}

export default AuthContextProvider
