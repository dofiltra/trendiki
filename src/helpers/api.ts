/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrendItem } from 'models/Trends'
import { sleep } from 'time-helpers'
import _ from 'lodash'
import fetch from 'unfetch'

export const HOST_API = 'https://api.dofiltra.com'
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function getTrends(count = 100) {
  const mock = [
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
  ]

  await sleep(5e3)

  try {
    return {
      result: mock
        .map(
          (imageSrc) =>
            new TrendItem({
              imageSrc,
              votes: _.random(10, 90, false),
              views: _.random(90, 100, false),
            })
        )
        .sort((a, b) =>
          _.random(true) > 0.5 && b.votes! - a.votes! > 0 ? 1 : -1
        ),
    }
    const resp = await fetch(`${HOST_API}/api/trends/get?count=${count}`, {
      headers,
      method: 'GET',
    })

    const { items } = await resp.json()

    return items
  } catch (error: any) {
    return { error }
  }
}
