import ListHeaderList from "./ListHeaderList"

const ListHeader = () => {

    const headerList = [{ "url": "/cryptoworld", "list": "Coin" },
    { url: "/cryptoworld/exchange", "list": "Exchange" }]

    console.log(headerList)
    return (
        <>
            <div className=" mt-2 mb-4 w-fit p-[5.5px_8px] rounded-md flex items-center justify-center dark:bg-[#2c2c2c] dark:shadow-[inset_0px_0px_5px_#191820] shadow-[inset_0px_0px_5px_#abaaac7c] text-center">
                {headerList.map((val) => <ListHeaderList key={val.list} url={val.url} list={val.list} />)}
            </div>
        </>
    )
}

export default ListHeader
