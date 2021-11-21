/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'preact/hooks'
import { useLocalize } from '@borodutch-labs/localize-react'
import _ from 'lodash'

export default function TopView() {
  const { translate } = useLocalize()
  const [state, setState] = useState({})

  useEffect(() => {
    console.log(1)
  }, [state])

  return (
    <>
      <h1 className="w-full flex justify-center uppercase p-2">
        {translate('Top trends')}
      </h1>

      <div className="text-center my-6">
        <div className="flex flex-row w-full">
          <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
            123
          </div>
        </div>
      </div>
    </>
  )
}
