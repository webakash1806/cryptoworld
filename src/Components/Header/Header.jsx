import HeaderList from "./HeaderList"
import DarkModeToggle from "../../Hooks/DarkModeToggle"

const Header = () => {

    const headerList = [{ "url": "/cryptoworld/coin", "list": "Coin" },
    { url: "/cryptoworld/exchange", "list": "Exchange" }]


    return (
        <>
            <div className="w-[100vw] p-3 flex gap-5 items-center justify-center bg-slate-200 text-center">
                {headerList.map((val) => <HeaderList key={val.list} url={val.url} list={val.list} />)}
            </div>
            <DarkModeToggle />
        </>
    )
}

export default Header
