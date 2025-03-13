import {  useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d7474cb911e35f5accb580b0/latest/USD`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;