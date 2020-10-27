import React from "react";
import * as S from "./styled";

export const SelectFilter = ({ column }) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const options = React.useMemo(() => {
    return [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Horror",
      "Thriller",
      "Animation",
      "Comedy",
      "Family",
      "Fantasy",
      "Drama",
      "Music",
      "Biography",
      "Romance",
      "History",
      "Crime",
      "War",
    ]
  }, [id, preFilteredRows])

  return (
    <S.Select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </S.Select>
  )
};
