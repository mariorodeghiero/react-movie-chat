import React from "react";

export default function Table({ movies }) {
  return (
    <div>
      {movies.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}
