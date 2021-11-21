/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrendItem } from 'models/Trends'
import _ from 'lodash'
import fetch from 'unfetch'

// export const HOST_API = 'http://localhost:2989'
export const HOST_API = 'https://api.dofiltra.com'
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function getTrends(count = 100) {
  try {
    const resp = await fetch(`${HOST_API}/api/trendiki/get?count=${count}`, {
      headers,
      method: 'GET',
    })

    const { items } = await resp.json()
    const { data = [] } = { ...items }

    return data
      .map((item: TrendItem) => new TrendItem(item))
      .sort((a: TrendItem, b: TrendItem) =>
        _.random(true) > 0.5 && b.votes! - a.votes! > 0 ? 1 : -1
      )
  } catch (error: any) {
    return { error }
  }
}

export async function addTrend(trendItem: TrendItem) {
  try {
    const resp = await fetch(`${HOST_API}/api/trendiki/add`, {
      headers,
      method: 'POST',
      body: JSON.stringify(trendItem),
    })

    return await resp.json()
  } catch (error: any) {
    return { error }
  }
}
