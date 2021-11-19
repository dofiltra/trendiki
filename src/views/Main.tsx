/* eslint-disable @typescript-eslint/no-explicit-any */

const CardItem = ({ backgroundSrc, photoSrc }: any) => {
  return (
    <div
      className="flex items-center w-full px-2 py-10 bg-cover card bg-base-200"
      style={{
        backgroundImage: `url("${backgroundSrc}")`,
      }}
    >
      <div className="card glass lg:card-side text-neutral-content">
        <figure className="p-4">
          <img src={photoSrc} className="rounded-lg shadow-lg" />
        </figure>
      </div>
    </div>
  )
}
export default function MainView() {
  return (
    <>
      <h1 className="w-full flex justify-center uppercase">Выбери тренд</h1>

      <div className="card text-center shadow-2xl my-6">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <CardItem
              backgroundSrc="https://picsum.photos/200/300/?blur=2"
              photoSrc="https://picsum.photos/300/180"
            />
          </div>
          <div className="divider lg:divider-vertical">VS</div>
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <CardItem
              backgroundSrc="https://picsum.photos/200/300/?blur=1"
              photoSrc="https://picsum.photos/300/180?v=1"
            />
          </div>
        </div>
      </div>
    </>
  )
}
