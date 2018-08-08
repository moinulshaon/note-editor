import React, { Component } from "react";
import MyButton from "./component/MyButton";
import ArticleListItem from "./component/ArticleListItem";
import Article from "./component/Article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedArticle: null
    };
  }

  createArticle() {
    const key = this.generateArticleKey();
    const newArticle = {
      key: key,
      name: `Untitled-${key}`,
      content: ""
    };
    const newArticles = [...this.state.articles, newArticle];
    this.setState({
      articles: newArticles
    });
  }

  generateArticleKey() {
    for (let i=1;;++i) {
      if (this.state.articles.filter(a=> a.key === i).length === 0) {
        return i;
      }
    }
  }


  saveArticle() {
    var newArticles = this.state.articles.filter(
      a => a.key !== this.articleComponent.state.key
    );
    const newArticle = {
      key: this.articleComponent.state.key,
      name: this.articleComponent.state.name,
      content: this.articleComponent.state.content
    };

    this.setState({
      articles: [newArticle, ...newArticles]
    });
  }

  selectArticle(article) {
    this.setState({
      selectedArticle: article
    });
  }

  renderArticleList() {
    if (this.state.articles.length === 0) {
      return <div />;
    }
    return this.state.articles.map(article => (
      <ArticleListItem
        key={article.key}
        name={article.name}
        onClick={() => this.selectArticle(article)}
        isSelected={this.state.selectedArticle && this.state.selectedArticle.key === article.key}
      />
    ));
  }

  deleteArticle() {
    var selected = this.state.selectedArticle;
    this.setState({
      articles: this.state.articles.filter(a => a.key !== selected.key),
      selectedArticle: null
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">Note Editor</h1>
        <ul>
          <MyButton text="New" onClick={() => this.createArticle()} />
          <MyButton
            text="Save"
            onClick={() => this.saveArticle()}
            disabled={!this.state.selectedArticle}
          />
          <MyButton
            text="Delete"
            onClick={() => this.deleteArticle()}
            disabled={!this.state.selectedArticle}
          />
        </ul>

        <div className="editor">
          <ul className="article-list">{this.renderArticleList()}</ul>

          <Article
            ref={articleComponent => {
              this.articleComponent = articleComponent;
            }}
            article={this.state.selectedArticle}
          />
        </div>
      </div>
    );
  }
}

export default App;
