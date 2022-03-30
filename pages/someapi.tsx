import {useState,useEffect} from 'react'
import FabiCoin from '../Components/FabiCoin';
import axios from 'axios';

interface SomeapiProps {

}

const Someapi: React.FC<SomeapiProps> = ({}) => {
    const [potato, setPotato] = useState<number>(0)
    const [coins, setCoins] = useState<any>([])
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
            console.log(res.data)
        }).catch(error => console.log(error))    
        }, []);


    // const filteredCoins = coins.filter(coin =>
    //     coin.name.toLowerCase().includes(search.toLowerCase())
    // )
    
    return (
        <>  
            <div className='flex min-h-screen w-full justify-center items-center'>
                <div className="flex flex-col  text-center items-center justify-center text-3xl">
                    <h2>Here there's going to be an api</h2>
                    <button className='mt-8 bg-pink-500 px-4 py-2 mb-3 text-2xl rounded-2xl' onClick={() => setPotato(potato + 1)}>Add ONE </button>
                    <button className="rounded-xl bg-yellow-400 text-black p-4">{potato}</button>
                </div>
                <div className="mt-8 flex flex-col flex-wrap">
                {coins && coins.map((coin: any) => {
                return (
                <FabiCoin  
                    key={coin.id} 
                    name={coin.name}  
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                 />
                )
                })}
                </div>
            </div>
        </>);
}
export default Someapi;

