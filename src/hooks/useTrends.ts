import { TrendItem } from 'models/Trends'
import { getTrends } from 'helpers/api'
import { useEffect, useState } from 'react'
import _ from 'lodash'

export default function useTrends() {
  const [trends, setTrends] = useState<undefined | TrendItem[]>(undefined)

  const fetchData = async () => {
    console.log(1)
    try {
      const { result: trends } = await getTrends()
      setTrends(trends)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { trends, maxVotes: _.maxBy(trends, 'votes')?.votes || 0 }
}
