import React from "react";
import "./types.css"
export default function Card({name, index, image,types}){

    

    return(
        <div className="card" key={index}>
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