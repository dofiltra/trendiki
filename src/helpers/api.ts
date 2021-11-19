/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'unfetch'

export const HOST_API = 'https://api.dofiltra.com'
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function getTest(id: string) {
  try {
    const resp = await fetch(`${HOST_API}/api/test/get?id=${id}`, {
      headers,
      method: 'GET',
    })

    return await resp.json()
  } catch (error: any) {
    return { error }
  }
}
