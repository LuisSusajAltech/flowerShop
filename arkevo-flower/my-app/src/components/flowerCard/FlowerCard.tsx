// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import fav from "../../assets/favourite.svg"
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
interface FlowerCardProps {
  flower: Flower;
  authData: AuthData[];
}
export default function FlowerCard({flower, authData} : FlowerCardProps) {
  return (
    <div className="flower-card">
        <img src={flower.profile_picture} style={{width:"100%", height:'100%', objectFit:"cover",}}/>
        <div>
            <span className="name">{flower.name}</span>
            <span className="name-latin">{flower.latin_name}</span>
            <button>{flower.sightings} sightings</button> 
            {authData && authData.length ? <img src={fav} className="fav"/> : null}
        </div>
    </div>
  )
}
