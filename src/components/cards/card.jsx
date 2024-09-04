import React, { useState } from "react";
import "./types.css"
export default function Card({name, index, image,types, stats}){
    const [codeFront,setCodeFront] = useState(
        <div className={"front"}>
            <h2>{name}</h2>
            <img src={image} alt="error"/>
            <div className="types">
                {
                    types.map((type,ind)=>{
                        return(
                            <label className={type.type.name} key={ind}>
                                {type.type.name}
                            </label>
                            )
                    })
                }
            </div>
        </div>
    );
    function handleHover(e) {
        setCodeFront(
            <div className={"front"}>
                <h3>Stats</h3>
                <div className="stats">
                    {stats.map((stat)=>{
                        return(
                            <div className="row">
                                <span>{stat.stat.name}</span>
                                <span>{stat.base_stat}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    function handleOut(e){
        setCodeFront(
            <div className={"front"} >
                <h2>{name}</h2>
                <img src={image} alt="error"/>
                <div className="types">
                    {
                        types.map((type,ind)=>{
                            return(
                                <label className={type.type.name} key={ind}>
                                    {type.type.name}
                                </label>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
    return(
        <div className="card" key={index} onMouseOver={handleHover} onMouseOut={handleOut}>
                {codeFront}
        </div>
    )
}