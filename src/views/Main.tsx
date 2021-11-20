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

const TrendBlock = ({
  photoSrc,
  maxHeight = 180,
  maxWidth = 300,
  onClick,
  percentWin = 0,
}: any) => {
  return (
    <div
      className="flex items-center w-full p-2 py-10 bg-cover card bg-base-200 cursor-pointer"
      style={{
        backgroundImage: `url("${photoSrc}")`,
      }}
      onClick={onClick}
    >
      <div className="card glass lg:card-side text-neutral-content">
        <figure className="p-3">
          <img
            src={photoSrc}
            className="rounded-lg shadow-lg"
            style={{
              maxWidth,
              maxHeight,
            }}
          />
        </figure>
      </div>
      <div className="w-full flex justify-center p-4">
        <div className="p-6 space-y-2 artboard phone items-stretch text-white">
          <progress
            className="progress progress-warning"
            value={percentWin}
            max={100}
          />
          <div className="flex items-stretch justify-center glass">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {percentWin.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MainView() {
  const { trends = [] } = useTrends()
  const { translate } = useLocalize()

  const [state, setState] = useState({
    loading: trends.length === 0,
  })

  const onSelectWinner = (winner: TrendItem, loser: TrendItem) => {
    trends.shift()
    trends.shift()

    setState({
      ...state,
      loading: false,
    })
  }

  return (
    <>
      <h1 className="w-full flex justify-center uppercase p-4">
        {translate('Select trend')}
      </h1>

      <div className="text-center my-6">
        {/* {<EndBlock />} */}

        {state.loading && trends.length === 0 && <Loading />}
        {!state.loading && trends.length < 2 && <EndBlock />}
        {trends.length >= 2 && (
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16 ">
              <TrendBlock
                photoSrc={trends[0].imageSrc}
                onClick={() => onSelectWinner(trends[0], trends[1])}
                percentWin={trends[0].getPercent()}
              />
            </div>
            <div className="divider lg:divider-vertical">VS</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16">
              <TrendBlock
                photoSrc={trends[1].imageSrc}
                onClick={() => onSelectWinner(trends[1], trends[0])}
                percentWin={trends[1].getPercent()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
