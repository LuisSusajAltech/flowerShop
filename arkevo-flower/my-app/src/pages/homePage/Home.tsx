// import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import { Container } from "react-bootstrap";
import {useState, useEffect} from 'react';
import { endpoint } from '../../components/api/api';
import axios from 'axios';
import FlowerContainer from '../../components/flowerContainer/FlowerContainer';
interface AuthData {
    first_name: string,
    id: number,
    last_name: string,
}
interface HomeProps{
    authData:AuthData[];
}
export default function Home({authData} : HomeProps) {
    const [flowers, setFlowers] = useState([]);
    useEffect(()=>{
        axios.get(endpoint + "flowers?page=0").then(res=>{
            const data = res.data;
            setFlowers(data.flowers)
        }).catch(err=>console.log(err))
    },[])
  return (
    <>
        <Container>
            <Hero />
            {flowers ? <FlowerContainer flowers={flowers} authData={authData}/> : null}
        </Container>
    </>
  )
}
