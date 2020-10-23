import React from "react";
import { useTable } from "react-table";
import * as S from "./styled";

function Table({ movies }) {
  const data = React.useMemo(() => [...movies], [movies]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Runtime",
        accessor: "runtime",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
      {
        Header: "Genres",
        accessor: "genre",
      },
    ],
    []
  );

  const genres = [
    "All",
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
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <S.Wrapper>
      <S.Table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <S.Thead>
          {headerGroups.map((headerGroup) => (
            <S.Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <S.Th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </S.Th>
              ))}
            </S.Tr>
          ))}
          <S.Tr>
            <S.Td>
              <S.Input type="text" placeholder="search..." />
            </S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td>
              <S.Select>
                {genres.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </S.Select>
            </S.Td>
          </S.Tr>
        </S.Thead>
      <S.Content>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <S.TrContent {...row.getRowProps()} white={index % 2 === 0}>
                  {row.cells.map((cell) => {
                    return (
                      <S.TdContent {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </S.TdContent>
                    );
                  })}
                </S.TrContent>
              );
            })}
          </tbody>
      </S.Content>
            </S.Table>
    </S.Wrapper>
  );
}

export default Table;
