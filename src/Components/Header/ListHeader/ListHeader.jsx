import ListHeaderList from "./ListHeaderList"

const ListHeader = () => {

    const headerList = [{ "url": "/cryptoworld", "list": "Coin" },
    { url: "/cryptoworld/exchange", "list": "Exchange" }]

    console.log(headerList)
    return (
        <>
            <div className="w-[100vw] dark:transparent dark:transparent p-3 flex gap-5 items-center justify-center bg-slate-200 text-center">
                {headerList.map((val) => <ListHeaderList key={val.list} url={val.url} list={val.list} />)}
            </div>
        </>
    )
}

export default ListHeader
