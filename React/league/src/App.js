import React,{useState} from "react";
import './App.css';
import axios from 'axios';
import { usePalette } from 'react-palette'
import hexToRgba from 'hex-to-rgba';





function App() {
    const [searchText,setSearchText] = useState("");
    const [playerData,setplayerData] = useState({});
    const [colors,setColors] = useState([]);
    const { data, loading, error } = usePalette(`http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${playerData.profileIconId}.png`)



    console.log(colors)

    const API_KEY = process.env.REACT_APP_RIOT_API

   async function searchForPlayer(event){
        // Set up the correct API call
        var APICallString = "https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY
        // handle the API call
        axios.get(APICallString).then(async (res) => {
            await setplayerData(res.data)
            console.log(res.data)

        }).catch((err)=>{
            console.log(err)
        })
       setTimeout('',15000)
       console.log(hexToRgba(data.lightVibrant))


       setColors(hexToRgba(data))
    }

    return (
    <div className="App">
      <div className="container">
        <h5>League of Legends Player Searcher</h5>
        <input type="text" onChange = {e => setSearchText(e.target.value)} />
        <button onClick={e => searchForPlayer(e)}>Search Player</button>
      </div>

        {JSON.stringify(playerData) !== '{}' ?
            <div className="datas" style={{background: `linear-gradient(180deg, ${data.darkVibrant} 10%, ${data.vibrant} 80%, ${data.lightVibrant} 100%)`}}>
                <div className="icon">
                    <img alt="profile" width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/" + playerData.profileIconId+ ".png"}/>
                </div>
                <h2 >Summoner Name: <span className="summoner">{playerData.name}</span></h2>
                <div className="level">
                    <h2 >Summoner Level: <span className="summoner-level" style={{border:`2.34px solid ${data.muted}`}}>{playerData.summonerLevel}</span></h2>
                </div>

            </div> :
            <><p>We have no player data</p></>
        }
    </div>
  );
}

export default App;
