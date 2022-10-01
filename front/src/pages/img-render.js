import React, { useEffect, useState } from "react";
import CardData from "./img-test.js";

function Card(){
    
    const cards = CardData();
        //let username = data.username;
        console.log("here!!!");
        
        return( 
            <div className = "col-3">
                <p>HEllo</p>
                <p>cards</p>
                <div className = "adjust">
                    <div className="image">
                    <img src="data:image/<%=image.img.contentType%>;base64,
                     <%=image.img.data.toString('base64')%>"></img>

                    </div>
                    

                </div>
            </div>
        );
}

export default Card;