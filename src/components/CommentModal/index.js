import React, { useState } from "react";
import { Avatar } from "../Avatar/styled";
import * as S from "./styled";

export default function CommentModal({
  movie,
  comments,
  modalOpen,
  sendComment,
  handleModalOpen,
}) {
  const [inputValue, setInputValue] = useState("");
  const keys = comments ? Object.keys(comments) : [];
  const movieKey = keys.find((key) => comments[key].title === movie);

  return (
    <S.ModalWrapper open={modalOpen}>
      <S.Wrapper>
        <S.Header>
          <S.BackIcon onClick={handleModalOpen}/>
          <S.Title>{movie}</S.Title>
        </S.Header>
        <S.Content>
          <S.Box>
            {movieKey &&
              comments[movieKey].comments.map((item, index) => {
                return (
                  <S.Comment key={index}>
                    <Avatar />
                    <S.Text>{item}</S.Text>
                  </S.Comment>
                );
              })}
          </S.Box>
        </S.Content>
        <S.FormFooter
          onSubmit={(event) => {
            event.preventDefault()
            sendComment(inputValue, movie, movieKey)
            setInputValue("")
          }
        }
        >
          <S.Input
            type="text"
            required
            autoFocus
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue || ""}
          />
          <S.Button type="submit">
            <S.SendIcon />
          </S.Button>
        </S.FormFooter>
      </S.Wrapper>
    </S.ModalWrapper>
  );
}
