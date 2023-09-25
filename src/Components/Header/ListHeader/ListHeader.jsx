import ListHeaderList from "./ListHeaderList"

const ListHeader = () => {

    const headerList = [{ "url": "/cryptoworld", "list": "Coin" },
    { url: "/cryptoworld/exchange", "list": "Exchange" }]

    console.log(headerList)
    return (
        <>
            <div className="w-[100vw]  p-3 flex gap-5 items-center justify-center dark:bg-[#120d2b64] bg-transparent border-b border-[#b5b5b580] dark:border-[#6f6f6fab] text-center">
                {headerList.map((val) => <ListHeaderList key={val.list} url={val.url} list={val.list} />)}
            </div>
        </>
    )
}

export default ListHeader
