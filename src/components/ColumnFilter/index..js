import React from "react";
import * as S from "./styled";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <S.Input
      value={filterValue || ""}
      onChange={(event) => setFilter(event.target.value)}
      placeholder="Filter by title"
    />
  );
};
