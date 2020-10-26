import React from "react";
import Table from "./components/Table";
import CommentModal from "./components/CommentModal";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { GlobalStyle } from "./utils/styled";

import { database } from "./firebase";
import axios from "axios";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      comments: {},
      modalOpen: false,
      selectedMovie: "",
    };
  }

  async componentDidMount() {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const response = await axios.get("/web/movies.json");
    this.setState({ isLoading: true });
    this.comments = database.ref("comments");
    this.comments.on("value", (snapshot) => {
      this.setState({
        isLoading: false,
        movies: response.data,
        comments: snapshot.val(),
      });
    });
  }

  sendComment = (comment, title, movieKey) => {
    const { comments } = this.state;
    const data = {};
    if (movieKey) {
      data["comments/" + movieKey] = {
        comments: [...comments[movieKey].comments, comment],
        title,
      };
      database.ref().update(data);
    } else {
      const id = database.ref().child("comments").push().key;
      data["comments/" + id] = {
        comments: [comment],
        title,
      };
      database.ref().update(data);
    }
  };

  handleMovie = (movie) => {
    this.setState({ selectedMovie: movie });
    this.handleModalOpen();
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const {
      comments,
      modalOpen,
      selectedMovie,
      movies,
      isLoading,
    } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader/>
        ) : (
          <div>
            <GlobalStyle />
            <Header title="Movie chat application" />
            <Table movies={movies} handleMovie={this.handleMovie} />
            <CommentModal
              movie={selectedMovie}
              comments={comments}
              modalOpen={modalOpen}
              sendComment={this.sendComment}
              handleModalOpen={this.handleModalOpen}
            />
          </div>
        )}
      </>
    );
  }
}

export default App;
