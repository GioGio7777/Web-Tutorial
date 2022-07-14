import React, {useState} from 'react';
import {useQuery} from "react-query";
import Character from "./Character.jsx";

const Characters = () => {
    const [page,setPage] = useState(1)

    const fetchCharacters = async ({queryKey}) => {


        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json();
    }
    const {data, status, isPreviousData,isError} = useQuery(["characters",page], fetchCharacters ,{
        keepPreviousData:true, // datayı tutar bi sonraki fetche kadar
    }) // fetch ettik response döndürdük ve data ve statusa atadık değerleri
    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error</div>
    }

    return (
        <div className="characters">
            {data.results?.map((character) => (
                <Character character={character}  />
            ))}
            <div>
                <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>Previous</button>
                <button disabled={isPreviousData && !data.info.next} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Characters;