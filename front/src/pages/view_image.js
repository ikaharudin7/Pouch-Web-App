import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function CardData(){
    const [data, setData] = useState(
        []
    );


useEffect(() => {

    const url = `http://localhost:8080/view_image`;
    Axios.get(url).then((res)=>{
        setData(res.data);
    }).catch(err=>console.log(err));
  }, []);

    return data;
}