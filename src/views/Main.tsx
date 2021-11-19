/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'preact/hooks'

const TrendItem = ({
  backgroundSrc,
  photoSrc,
  maxHeight = 180,
  maxWidth = 300,
  onClick,
}: any) => {
  return (
    <div
      className="flex items-center w-full p-2 py-10 bg-cover card bg-base-200 link-hover link"
      style={{
        backgroundImage: `url("${backgroundSrc}")`,
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
    </div>
  )
}

export default function MainView() {
  const items = [
    'https://i.pinimg.com/originals/03/1a/b7/031ab7d43f86955bc82d8bcc95294d8d.jpg',
    'https://i.pinimg.com/originals/fb/35/58/fb3558e4f63d391f5769bb36d7407653.jpg',
    'https://bestmanikyur.ru/wp-content/uploads/2018/10/nailart-28-e1540885651712.jpg',
    'https://images11.bazaar.ru/upload/custom/68f/68fbdbd0ec69b0a73662dac3c3e7cadc.jpeg',
    'https://thumb.tildacdn.com/tild3566-6435-4364-b332-373962363239/-/resize/744x/-/format/webp/idei-dlya-manikyura.jpg',
    'https://nailsplus.com.ua/image/catalog/stati/march/1.jpg',
    'https://ohfashion.ru/wp-content/uploads/2021/03/SHikarnyiy-manikyur-na-dlinnyih-nogtyah-so-strazami.jpg',
    'https://n1s1.elle.ru/d9/12/7c/d9127ce394e3661da33874fe1f806ab8/1080x1033_0xac120003_19449275071578985154.jpg',
    'https://i.pinimg.com/originals/e7/7c/97/e77c97c5e2a4582a36a3506b6ad89faa.jpg',
    'https://i.ytimg.com/vi/Zlh2g8ycxSI/maxresdefault.jpg',
    'https://peopletalk.ru/wp-content/uploads/2020/07/molar-nails-today-tease-180518_8175386d098c036f4316ba3e95c68cbe.fit-1240w-640x360.jpg',
    'https://s1.stc.all.kpcdn.net/putevoditel/projectid_379258/images/tild3333-6265-4666-b565-636136626138__shutterstock_7413469.jpg',
    'https://media.glamour.ru/photos/6176f4db002384cbd2bb3bec/16:9/w_2560%2Cc_limit/image-25-10-21-07-41-2.jpeg',
    'https://aif-s3.aif.ru/images/025/502/839b58c7b8782dca5d35768c566176c8.jpg',
  ].sort(() => (Math.random() > 0.5 ? 1 : -1))

  const [state, setState] = useState({
    winner: '',
    backgroundSrc1: 'https://picsum.photos/200/300/?blur=1',
    backgroundSrc2: 'https://picsum.photos/200/300/?blur=2',
  })

  const onSelectWinner = (winner: any) => {
    setState({
      winner,
      backgroundSrc1: `https://picsum.photos/200/300/?blur=${Math.random()}`,
      backgroundSrc2: `https://picsum.photos/200/300/?blur=${Math.random()}`,
    })
  }

  return (
    <>
      <h1 className="w-full flex justify-center uppercase p-4">Выбери тренд</h1>

      <div className="text-center  my-6">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16 ">
            <TrendItem
              backgroundSrc={state.backgroundSrc1}
              photoSrc={items[0]}
              onClick={() => onSelectWinner(items[0])}
            />
          </div>
          <div className="divider lg:divider-vertical">VS</div>
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center min-h-16">
            <TrendItem
              backgroundSrc={state.backgroundSrc2}
              photoSrc={items[1]}
              onClick={() => onSelectWinner(items[1])}
            />
          </div>
        </div>
      </div>
    </>
  )
}
