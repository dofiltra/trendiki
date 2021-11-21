/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { TrendCategory, TrendItem } from 'models/Trends'
import { addTrend } from 'helpers/api'
import { useEffect, useState } from 'preact/hooks'
import { useLocalize } from '@borodutch-labs/localize-react'
import AppStore from 'stores/AppStore'
import _ from 'lodash'

const getInstagramPostId = (link: string) => {
  try {
    const regExp = /\/p\/(.*?)\//
    const [, postId] = link.match(regExp) || []
    return postId
  } catch {
    return ''
  }
}

export default function AddView() {
  const { translate } = useLocalize()
  const [state, setState] = useState({
    link: '',
    success: false,
  })
  const postId = getInstagramPostId(state.link)
  const instagramUrl =
    postId &&
    `https://www.instagram.com/p/${postId}/?utm_source=ig_embed&utm_campaign=loading`

  useEffect(() => {
    postId && (window as any).instgrm?.Embeds?.process()
  }, [state])

  return (
    <>
      <h1 className="w-full flex justify-center uppercase p-2">
        {translate('Add trend')}
      </h1>

      <div className="text-center my-6">
        <div className="flex flex-row w-full">
          <div className="grid flex-grow h-full  w-full card bg-base-300 rounded-box place-items-center">
            <div className=" w-full">
              <label className="label">
                <span className="label-text">
                  {translate('Insert instagram link')}
                </span>
              </label>
              <input
                value={state.link}
                onChange={(e) => {
                  setState({ ...state, link: e.target.value, success: false })
                }}
                placeholder="https://www.instagram.com/p/CWgoyEAKcHo/"
                className="w-full pr-16 input input-primary input-bordered"
                type="text"
              />
            </div>

            {postId && (
              <div className={postId ? 'p-6' : 'hidden'}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={instagramUrl}
                  data-instgrm-version={14}
                ></blockquote>
              </div>
            )}

            {postId && (
              <button
                className="w-full rounded-l-none btn btn-success"
                onClick={(e) => {
                  addTrend(
                    new TrendItem({
                      category: TrendCategory.manicure,
                      instagramId: postId,
                      lang: AppStore.language,
                    })
                  )
                    .then((x) => console.log(x))
                    .catch((x) => console.log(x))

                  setState({
                    ...state,
                    link: '',
                    success: true,
                  })
                }}
              >
                {translate('AddTrendBtn')}
              </button>
            )}

            {!postId && state.link && (
              <div className="alert alert-error">
                {translate('Instagram link invalid')}
              </div>
            )}

            {state.success && (
              <div className="alert alert-success">
                {translate('Your post add to the Battle')}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
