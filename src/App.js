import React from "react";
import Table from "./components/Table";
import CommentModal from "./components/CommentModal";
import Header from "./components/Header";
import movies from "./db/movies.json";
import { GlobalStyle } from "./utils/styled";
import { database } from "./firebase";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {},
      modalOpen: false,
      selectedMovie: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.comments = database.ref("comments");
    this.comments.on("value", (snapshot) => {
      this.setState({
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
      console.log("test", movieKey);
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
    this.setState({selectedMovie: movie})
    this.handleModalOpen()
  }

  handleModalOpen = () => {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  render() {
    const { comments, modalOpen, selectedMovie } = this.state;
    return (
      <div>
        <GlobalStyle />
        <Header title="Movie chat application" />
        <Table movies={movies} handleMovie={this.handleMovie}/>
        <CommentModal
          movie={selectedMovie}
          comments={comments}
          modalOpen={modalOpen}
          sendComment={this.sendComment}
          handleModalOpen={this.handleModalOpen}
        />
      </div>
    );
  }
}

export default App;
