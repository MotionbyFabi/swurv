
interface FabiCoinProps {
name:string
marketcap:number | any
price:number
}

const FabiCoin: React.FC<FabiCoinProps> = ({name,marketcap,price}) => {
        return (<div className="flex flex-col text-white">
            <div className="bg-pink-300 text-black rounded-xl p-4">
            <h3>{name}</h3>
            <h3 className="mt-4 px-8 bg-red-600 rounded-xl text-white">
            {marketcap}
            </h3>
            </div>
            
            </div>);
}
export default FabiCoin;