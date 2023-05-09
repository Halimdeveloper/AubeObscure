// disable tsc error for this file

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Navigate } from 'react-router-dom'

export const AuthGuard = ({
  currentUser,
  children,
}: {
  currentUser: any
  children: any
}) => {
  if (!currentUser._id) {
    return <Navigate to='/' replace />
  }
  return children
}

export default { AuthGuard }
