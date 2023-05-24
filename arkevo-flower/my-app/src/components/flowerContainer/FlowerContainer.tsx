// import React from 'react'
import FlowerCard from '../flowerCard/FlowerCard'
import Loading from '../loading/Loading';

interface Flower {
    favourite: boolean;
    id:number,
    latin_name:string,
    name:string,
    profile_picture:string,
    sightings: number;
  }
  interface AuthData {
    first_name: string,
    id: number,
    last_name: string,
}
interface FlowerContainerProps {
    flowers: Flower[];
    authData:AuthData[];
}
  
export default function FlowerContainer({flowers, authData} : FlowerContainerProps) {
  return (
    <div id="flower-container" className="row" style={{margin:'60px 0 0 0', marginTop:40, minHeight:200,}}>
        {flowers ? flowers.map((flower, i) => <FlowerCard key={i} flower={flower} authData={authData}/> ) : <Loading />}
    </div>
  )
}
