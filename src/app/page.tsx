import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="">
      <Link href="/login" className="text-primary hover:underline">
        Авторизация
      </Link>
      <Link href="/register" className="text-primary hover:underline">
        Зарегистрироваться
      </Link>
      <Link href="/transactions" className="text-primary hover:underline">
        Транзакции
      </Link>
    </div>
  )
}
