import React, { useEffect, useState } from "react";
import CardData from "./view_image";

function Card(){
    
    const cards = CardData();
    try{const allCards = cards.map( function (data) {
        console.log(data);

        return( 
            <div className = "col-3">
                <div className = "adjust">
                    <div className="image">
                        <img src={`data:image/png;base64,${data.img.data}`} alt=""/>
                    </div>
                    <div className="owner">{data.ownerID}</div>
                    <div classname="name">{data.name}</div>
                    <div classname="desc">{data.desc}</div>
                    <div classname="type">{data.img.contentType}</div>
                </div>
            </div>
        );
    })
    return [allCards];}
    catch(e){ return null;}
}

export default Card;