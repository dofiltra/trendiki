/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from 'react-router-dom'
import { Loading } from 'components/Loader'
import { TrendItem } from 'models/Trends'
import { useEffect, useState } from 'preact/hooks'
import { useLocalize } from '@borodutch-labs/localize-react'
import _ from 'lodash'
import useTrends from 'hooks/useTrends'

const EndBlock = () => {
  const { translate } = useLocalize()

  return (
    <div className="">
      <b className="flex justify-center w-full">{translate('VoteAccepted')}</b>
      <span className="flex justify-center pb-4 w-full">
        {translate('VoteTotal')}
      </span>

      <Link className="btn btn-success h-full py-2" to="/top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
        {'  '}
        {translate('GoToTop')}
      </Link>

      <span className="flex justify-center p-4 w-full">
        {translate('NextBattle')}
      </span>
      <Link className="btn btn-info h-full py-2" to="/top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {'  '}
        {translate('Participate')}
      </Link>
    </div>
  )
}

const TrendBlock = ({ item, onClick }: any) => {
  const trendItem = item as TrendItem
  const { instagramId, votes } = trendItem
  const percent = trendItem.getPercent()
  const instagramUrl =
    instagramId &&
    `https://www.instagram.com/p/${instagramId}/?utm_source=ig_embed&utm_campaign=loading`

  return (
    <div
      key={instagramId}
      className="flex items-center w-full  bg-cover card cursor-pointer"
      onClick={onClick}
    >
      <button className="transition pt-6 border-0 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 animate-bounce transition border-0 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-140"
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
      </button>
      <svg
        className="animate-bounce w-6 h-6 text-amber-900"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>

      <blockquote
        className="instagram-media"
        data-instgrm-permalink={instagramUrl}
        data-instgrm-version={14}
      >
        <Loading />
      </blockquote>
      <div className="hidden md:block w-full flex justify-center ">
        <div className="p-2 artboard phone items-stretch w-full">
          <div className="grid-flow-row shadow stats">
            <div className="stat">
              <div className="stat-title"></div>
              <div className="stat-value">
                <div className="flex items-stretch justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {percent.toFixed(2)}%
                </div>
                <progress
                  className="progress progress-warning"
                  value={percent}
                  max={100}
                />
              </div>
              {/* <div className="stat-desc text-success">↗︎ +{votes} (22%)</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MainView() {
  const { trends = [], loading: trendsLoading } = useTrends()
  const { translate } = useLocalize()
  const [state, setState] = useState({})

  const onSelectWinner = (winner: TrendItem, loser: TrendItem) => {
    trends.shift()
    trends.shift()

    setState({
      ...state,
    })
  }

  useEffect(() => {
    console.log(trends.length)
    ;(window as any).instgrm?.Embeds?.process()
  }, [state, trends])

  const isEnd = !trendsLoading && trends.length < 2

  return (
    <>
      {!isEnd && (
        <h1 className="w-full flex justify-center uppercase p-2">
          {translate('Select trend')}
        </h1>
      )}

      <div className="text-center my-6">
        {trendsLoading && <Loading />}
        {isEnd && <EndBlock />}
        {trends.length >= 2 && (
          <div className="flex flex-row w-full">
            <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
              <TrendBlock
                item={trends[0]}
                onClick={() => onSelectWinner(trends[0], trends[1])}
              />
            </div>
            <div className="divider divider-vertical">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
              <TrendBlock
                item={trends[1]}
                onClick={() => onSelectWinner(trends[1], trends[0])}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
