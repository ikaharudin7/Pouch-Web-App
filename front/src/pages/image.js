import React, { useEffect, useState } from "react";
import CardData from "./view_image";

function Card(){
    
    const cards = CardData();
    try{const allCards = cards.map( function (data) {
        //let username = data.username;
        console.log("here!!!");
        console.log(data);

        return( 
            <div className = "col-3">
                <p>hello</p>
                <div className = "adjust">
                    <div className="image">
                        <img src={`data:image/png;base64,${data.img.data}`} alt=""/>
                    </div>
                    <div className="name">{data.img.contentType}</div>
                </div>
            </div>
        );
    })
    return [allCards];}
    catch(e){ return null;}
}

export default Card;
