import React from "react";
import Comics from "../components/Comics";

export function Marvel() {
  return (
    <>
      <h2>Marvel Comics</h2>
      <hr />
      <div className="container">
        <div className="row">
          <Comics editorial="Marvel Comics" />
        </div>
      </div>
    </>
  );
}
