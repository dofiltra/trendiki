/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Loading } from 'components/Loader'
import { TrendCategory, TrendItem } from 'models/Trends'
import { getTrends } from 'helpers/api'
import { useEffect, useState } from 'preact/hooks'
import { useLocalize } from '@borodutch-labs/localize-react'
import _ from 'lodash'

export default function TopView() {
  const { translate } = useLocalize()
  const [state, setState] = useState({
    category: TrendCategory.manicure,
    trends: [] as TrendItem[],
  })

  useEffect(() => {
    getTrends(50)
      .then((items: TrendItem[]) => {
        setState({
          ...state,
          trends: items.sort((a, b) =>
            b.getPercent() > a.getPercent() ? 1 : -1
          ),
        })
      })
      .catch((x) => console.log(x))
  }, [])

  useEffect(() => {
    state.trends.length && (window as any).instgrm?.Embeds?.process()
  }, [state])

  return (
    <>
      <div className="w-full grid justify-center p-2">
        <h1 className="w-full flex justify-center uppercase ">
          {translate('Top trends')}
        </h1>
        <div className="w-full flex justify-center lowercase ">
          * {translate('The higher the % the better')}
        </div>
      </div>

      {!state.trends.length && <Loading />}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.trends.map((t) => {
              return (
                <tr>
                  <td>
                    {(t.views && (
                      <div className="font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 transition border-0 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#ff007d"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                        </svg>
                        {t.getPercent()}%{' '}
                      </div>
                    )) ||
                      ''}
                    <div className="text-sm opacity-50">
                      {translate('Views', { views: t.views || 0 })}{' '}
                    </div>
                    <div className="text-sm opacity-50">
                      {translate('Votes', { votes: t.votes || 0 })}{' '}
                    </div>
                    {(t.lang && (
                      <div className="text-sm opacity-50">
                        {translate('Lang', { lang: t.lang || '' })}{' '}
                      </div>
                    )) ||
                      ''}
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar h-full w-full">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-permalink={`https://www.instagram.com/p/${t.instagramId}/`}
                          data-instgrm-version={14}
                        ></blockquote>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
