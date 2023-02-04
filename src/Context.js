import React,{useContext, useEffect, useReducer} from "react"
import reducer from "./Reducer";


const AppContext = React.createContext();

const API ="https://thapareactapi.up.railway.app";

const intialState ={
    name:"",
    image:"",
    services:[]
};


const AppProvider =({children})=>{

    const [state,dispatch]= useReducer(reducer,intialState);
    
const updateHomePage=()=>{
    return dispatch ({
        type:"HOME_UPDATE",
        payload:{
            name:"Komal Deshmukh",
            image:"./image/hero.svg",
        }
    })
}

const updateAboutPage=()=>{
    return dispatch ({
        type:"ABOUT_UPDATE",
        payload:{
            name:"Komal Deshmukh",
            image:"./image/about1.svg",
        }
    })
}

// to get the api data
const getServices = async(url)=>{
try{ 
    const res=await fetch(url);
    const data = await res.json();
    dispatch({type:"GATE_SEVICES", payload:data})
}catch(error)
{
    console.log(error);
}
}
//To call the APi


useEffect(()=>{
    getServices(API);

},[]);


    return(
    <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
    {children}
    </AppContext.Provider>
    )
};

const useGlobalContext=()=>{
    return useContext(AppContext);
}
export{AppContext, AppProvider, useGlobalContext};