'use client'
import { SignInPage, type AuthProvider } from '@toolpad/core'
import { redirect } from 'next/navigation'
// import { signIn } from '@/lib/auth' // ваш серверный метод

const signIn = () => Promise.resolve(() => {
  return {status: '200', error: null}
})

const providers: AuthProvider[] = [
  { id: 'credentials', name: 'Email и пароль' },
  // другие провайдеры (OAuth) можно добавить сюда
]

export default function SignIn() {
  return (
    <SignInPage
      providers={providers}
      signIn={async (provider, formData, callbackUrl) => {
        if (provider.id === 'credentials') {
          const email = formData?.get('email') as string
          const password = formData?.get('password') as string

          const res = await signIn('credentials', { email, password })

          if (res?.error) {
            return { error: res.error }
          }

          redirect(callbackUrl ?? '/dashboard')
          return {}
        }
      }}
      slotProps={{
        form: { noValidate: true },
        emailField: { label: 'Email', autoFocus: true },
        passwordField: { label: 'Пароль' },
        submitButton: { children: 'Войти' },
      }}
    />
  )
}
