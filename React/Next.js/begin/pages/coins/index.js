import Axios from "axios";

const CoinList = ({coinData}) => {
    return(
        <div>{coinData.coins.map((coin) => {
            return(
                <div>
                    <h1>{coin.name}</h1>
                    <img style={{height:"100px", width:"100px"}} src={coin.icon} alt={coin.name}/>
                    <p>{coin.price}</p>
                </div>
            )

        })}</div>
    )
}

//Her method ismini kullanamayız belli olanlar kullanılabilir
//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
//getStaticPropstan farkı getStaticProps kendini güncellemiyor.
// getServerSideProps kendini her requestte günceller

export const getServerSideProps  = async () => { // renders ve prerenders page
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    return{
        props:{
            coinData:data.data,
        },
    };
}
export default  CoinList