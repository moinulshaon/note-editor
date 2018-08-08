import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    const { article } = props;
    this.state = {
      key: article ? article.key : "",
      name: article ? article.name : "",
      content: article ? article.content : ""
    };
  }

  onChangeName(event) {
    const newName = event.target.value;
    this.setState({
      name: newName
    });
  }
  onChangeContent(event) {
    const newContent = event.target.value;
    this.setState({
      content: newContent
    });
  }

  componentWillReceiveProps({ article }) {
    if (this.props.article !== article) {
      this.setState({
        key: article ? article.key : "",
        name: article ? article.name : "",
        content: article ? article.content : ""
      });
    }
  }

  render() {
    return (
      <div className="article">
        <div>Title</div>
        <input
          className="name"
          value={this.state.name}
          onChange={e => this.onChangeName(e)}
        />
        <div>Content</div>
        <textarea
          className="content"
          value={this.state.content}
          onChange={e => this.onChangeContent(e)}
        />
      </div>
    );
  }
}

export default Article;
