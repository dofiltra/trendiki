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
  // const mockInstagrams = [
  //   'CWd3_ceIExY',
  //   'CWfSVSnM0Dq',
  //   'CWeFU55tVOx',
  //   'CWdMuh2I0WE',
  //   'CWfbXQ6o4Gx',
  //   'CWfFjRVIU92',
  //   'CWfd1-SAbau',
  //   'CWfyOdCtf3J',
  //   'CWfyN-uN5KO',
  //   'CWfyHs9NOuP',
  //   'CWfyHVZAleW',
  // ]
  // return {
  //   result: mockInstagrams
  //     // mockImgSrc
  //     .map(
  //       (instagramId) =>
  //         new TrendItem({
  //           id: _.random(true).toString(),
  //           instagramId,
  //           // imageSrc,
  //           votes: _.random(10, 90, false),
  //           views: _.random(90, 100, false),
  //         })
  //     )
  //     .sort((a, b) =>
  //       _.random(true) > 0.5 && b.votes! - a.votes! > 0 ? 1 : -1
  //     ),
  // }

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
