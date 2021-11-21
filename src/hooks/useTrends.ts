import { TrendItem } from 'models/Trends'
import { getTrends } from 'helpers/api'
import { useEffect, useState } from 'react'

export default function useTrends() {
  const [trends, setTrends] = useState<TrendItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setTrends(await getTrends())
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { trends, loading }
}
