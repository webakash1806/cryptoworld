import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/MainHeader/Header'
import CoinChart from '../CoinChart/CoinChart'
import useSingleCoin from '../../Hooks/useSingleCoin'


const CoinData = () => {
    const [singleCoin, setSingleCoin] = useSingleCoin()

    console.log(singleCoin)

    const { id } = useParams()



    // console.log(singleCoin.singleData.desc)

    useEffect(() => {
        setSingleCoin({ ...singleCoin, id: id })
    }, [id])

    // console.log(id)
    return (
        <div>
            <Header />
            <div className='mt-12'>
                {id} Data is coming soon
                <div>
                    <CoinChart id={id} />
                </div>
            </div>

        </div>
    )
}

export default CoinData
