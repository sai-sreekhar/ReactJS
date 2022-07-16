import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: "",
    };
  }

  async componentDidMount() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     console.log('response',response);
    //   })
    //   .catch((error) => {
    //     console.log('error',error);
    //   });

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({
        posts: res.data,
      });
      console.log(res);
    } catch (error) {
      console.log("error", error);
      this.setState({
        errorMsg: "Error retreving data",
      });
    }
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
