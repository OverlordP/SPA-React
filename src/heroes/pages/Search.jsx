import React from "react";
import { useForm } from "../../hooks/UseFormulario";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import GetName from "../helpers/GetName";
import HeroeCard from "../components/HeroeCard";

export function Search() {

  const { searchText, onInputChange } = useForm({ searchText: "" });
  const navigate = useNavigate();
  const location = useLocation();
  
  const query = queryString.parse(location.search);
  const {q=''} = query
  const hero = GetName(q);

  const sumiton = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText.toLowerCase()}`, { replace: true });
  };
  
  return (
    <>
      <p className="p-2">Busque su comic preferido ..</p>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={sumiton}>
              <p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Heroe"
                  name="searchText"
                  value={searchText}
                  onChange={onInputChange}
                />
              </p>
              <button className="btn btn-outline-primary">search</button>
            </form>
          </div>
          <div className="col-md-8">
            {
              (q==='')
              ?<div className="alert alert-primary" > El heroe esta cargando</div>
              : (hero.length===0)&&<div className="alert alert-danger">`El heroe ${q} no esta disponible`</div>  
            }
            {hero.map((e)=>(<HeroeCard key={e.id} heroe={e}/>))} 
          </div>
        </div>
      </div>
    </>
  );
}
