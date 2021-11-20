/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Loading } from 'components/Loader'
import { TrendItem } from 'models/Trends'
import { useEffect, useState } from 'preact/hooks'
import _ from 'lodash'
import useTrends from 'hooks/useTrends'

const EndBlock = () => {
  return <>End</>
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
      className="flex items-center w-full p-2 py-10 bg-cover card bg-base-200 link-hover link"
      style={{
        backgroundImage: `url("${photoSrc}")`,
      }}
      onClick={onClick}
    >
      <div className="card glass lg:card-side text-neutral-content">
        <figure className="p-4">
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
        <div className="p-6 space-y-2 artboard phone">
          <progress
            className="progress progress-warning"
            value={percentWin}
            max={100}
          />
        </div>
      </div>
    </div>
  )
}

export default function MainView() {
  const { trends = [], maxVotes = 0 } = useTrends()

  const [state, setState] = useState({
    loading: maxVotes === 0,
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
      <h1 className="w-full flex justify-center uppercase p-4">Выбери тренд</h1>

      <div className="text-center my-6">
        {state.loading && maxVotes === 0 && <Loading />}
        {!state.loading && trends.length < 2 && <EndBlock />}
        {trends.length >= 2 && (
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16 ">
              <TrendBlock
                photoSrc={trends[0].imageSrc}
                onClick={() => onSelectWinner(trends[0], trends[1])}
                percentWin={trends[0].getPercent(maxVotes)}
              />
            </div>
            <div className="divider lg:divider-vertical">VS</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16">
              <TrendBlock
                photoSrc={trends[1].imageSrc}
                onClick={() => onSelectWinner(trends[1], trends[0])}
                percentWin={trends[1].getPercent(maxVotes)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
