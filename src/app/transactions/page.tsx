import Link from 'next/link'

export default function TransactionsPage() {
    return (
        <div>
            <h1>Транзакции</h1>
          <Link href="/transactions/add">Добавить транзакцию</Link>
            {/* Таблица транзакций */}
        </div>
    )
}
