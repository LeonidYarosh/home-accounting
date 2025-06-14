import { useParams } from 'next/navigation'


export default function TransactionDetailPage() {
    const params = useParams()
    return (
        <div>
            <h1>Транзакция {params.day}</h1>

            {/* Детали транзакции */}
        </div>
    )
}
