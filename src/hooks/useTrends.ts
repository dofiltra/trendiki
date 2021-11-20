import { TrendItem } from 'models/Trends'
import { getTrends } from 'helpers/api'
import { useEffect, useState } from 'react'
import _ from 'lodash'

export default function useTrends() {
  const [trends, setTrends] = useState<TrendItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { result: trends } = await getTrends()
      setTrends(trends)
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
