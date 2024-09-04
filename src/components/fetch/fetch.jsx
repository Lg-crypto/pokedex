import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Card from "../cards/card"

export default function Fetch() {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    const [currentPage , setCurrentPage] = useState(1);
    const fetchPokemon = async () => {
        const endpoints = [];
        for (let i = 1; i <= 1025; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        await axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((res)=>setData(res)).catch((e)=>console.log(e));
    }
    const filteredPokemons = (filter)=>{
        const filtered = data.filter((pokemon)=>{
            return pokemon.data.name.includes(filter);
        })
        return filtered;
    }
    useEffect(()=>{
        fetchPokemon();
    },[])
    return(
        <main>
            <header>
                <div id="icon">
                    <img src="/assets/pokemon.png" alt="icon"/>
                </div>
                <input
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="search..." 
                    onChange={(e)=>{
                        setSearch(e.target.value.toLowerCase());
                        setCurrentPage(1);
                    }}
                />
            </header>
            <div className="container">
                {data.length > 0 ?
                filteredPokemons(search).map((pokemon,index)=>{
                    if(index >= ((currentPage-1)*49) && index <= (currentPage*49)){
                        console.log(currentPage);
                        return(
                            <Card index={index} name={pokemon.data.name} image={pokemon.data.sprites.front_default} stats={pokemon.data.stats} types={pokemon.data.types}/>
                        )
                    }
                })
                :
                <div id="loading">
                    <img id="pokeballImg" src="/assets/pokeball.svg" alt="loading..." />
                </div>
                }
                
            </div>
            <footer>
                <div className="BTNs">
                    <button onClick={()=>(currentPage-1) > 0 ? setCurrentPage(currentPage-1): 0}>{'<'} back</button>
                    <span className="pageNumber">{currentPage}</span>
                    <button onClick={()=>(currentPage-1) < 20 ? setCurrentPage(currentPage+1) : 0}>next {'>'}</button>
                </div>
            </footer>
        </main>
    )
}