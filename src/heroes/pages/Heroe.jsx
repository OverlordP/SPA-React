import React, { useMemo } from 'react'
import HeroeCard from '../components/HeroeCard'
import { Routes, Route,useParams,Navigate } from 'react-router-dom';
import { GetHeroeID } from '../helpers/GetHeroeId';

export function Heroe() {
    const {id}= useParams();

    
    const idHero = useMemo(()=>GetHeroeID(id),[id] );
    if(!idHero){
        return <Navigate to="/Marvel"/>
    }
  return (
   
        <><HeroeCard heroe = {idHero}/></>

  )
}

