import React, { useMemo } from "react";
import { Getcomics } from "../helpers/GetComics";
import CardComic from "./CardComic";



export default function Comics({ editorial }) {
  
  const comic = useMemo(()=>Getcomics(editorial),[editorial]);

  return (
    <>
      {comic.map((e) => (<CardComic key={e.id} {...e} />))}
    </>
  );
}
