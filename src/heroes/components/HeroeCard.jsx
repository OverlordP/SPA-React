import React from "react";
import { useNavigate } from "react-router-dom";


function HeroeCard({ heroe }) {
    const navigate = useNavigate()
    const onclik = ()=>{
        navigate(-1)
    }
  const ImgUrl = ` /assets/${heroe.id}.jpg`;
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5">
          <img
            src={ImgUrl}
            className="img-thumbnail"
            alt="No hay imagen disponible"
          />
        </div>
        <div className="col-7 p-4">
          <h3 className="card-title">{heroe.superhero}</h3>
          <hr />
          <p className="card-text"> <b>Identidad:</b>{heroe.characters}</p>
          <p className="card-text"><b>Publicado por:</b> {heroe.publisher}</p>
          <p className="card-text"><b>Aparicion:</b>  {heroe.first_appearance}</p>
          <p className="card-text"><b>Alternativo:</b>  {heroe.alter_ego}</p>
          <br />
          <button onClick={onclik}  className="btn btn-outline-primary btn-lg">Regresar..</button>
        </div>
      </div>
    </div>
  );
}

export default HeroeCard;
