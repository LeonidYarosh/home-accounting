'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { Button, Input, Form } from '@heroui/react'
import Head from 'next/head'
// Переделать на MUI
export default function LoginPage() {
  const [action, setAction] = useState<string | null>(null)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    setAction(`submit ${JSON.stringify(data)}`)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Head>
        <title>Log in</title>
      </Head>

      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-6">Log in</h1>

        <Form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col items-center"
            >
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      className="block w-full pr-10 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Email"
                    />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      label="Пароль"
                      className="block w-full pr-10 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Пароль"
                    />
                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  size="lg"
                >
                  Войти
                </Button>
            </Form>

            <p className="text-sm text-gray-400 mt-2 text-center">
              Нет аккаунта?{' '}
              <Link href="/register" className="text-red-500 hover:underline">
                Зарегистрироваться
              </Link>
            </p>
        <Form/>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </div>
  </div>
  )
}
