import {lazy} from 'react'
import type {Routes} from '@/@types/routes'

const authRoute: Routes = [
  {
    key: 'signIn',
    path: `/sign-in`,
    component: lazy(() => import('@/pages/auth/SignIn')),
    authority: [],
    meta: {
      title: 'Sign In',
      description: 'Sign in to your account',
    },
  },
  // {
  //   key: 'signUp',
  //   path: `/sign-up`,
  //   component: lazy(() => import('@/views/auth/SignUp')),
  //   authority: []
  // },
]

export default authRoute
