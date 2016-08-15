import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, updatePost, fetchPost } from '../actions';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';


class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '',
                   tags: '',
                   content: '',
                   author: '',
                   isTitleEditing: false,
                   isTagsEditing: false,
                   isContentEditing: false,
                };
    this.onTitleEdit = this.onTitleEdit.bind(this);
    this.onTagsEdit = this.onTagsEdit.bind(this);
    this.onContentEdit = this.onContentEdit.bind(this);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);

    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.onTitleRender = this.onTitleRender.bind(this);
    this.onTagsRender = this.onTagsRender.bind(this);
    this.onContentRender = this.onContentRender.bind(this);
  }


  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onTitleEdit() {
    if (this.state.isTitleEditing) {
      this.setState({ isTitleEditing: false });
    } else {
      this.setState({ isTitleEditing: true });
    }
  }

  onTagsEdit() {
    if (this.state.onTagsChange) {
      this.setState({ onTagsChange: false });
    } else {
      this.setState({ onTagsChange: true });
    }
  }

  onContentEdit() {
    if (this.state.onContentEdit) {
      this.setState({ onContentEdit: false });
    } else {
      this.setState({ onContentEdit: true });
    }
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    event.preventDefault();
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    event.preventDefault();
    this.setState({ content: event.target.value });
  }

  onUpdate() {
    this.props.updatePost({ title: this.state.title, tags: this.state.tags, content: this.state.content, id: this.props.params.id });
  }

  onDelete() {
    this.props.deletePost(this.props.params.id);
  }

  onTitleRender() {
    if (this.state.isTitleEditing) {
      return (
        <div><input className="render_title" onChange={this.onTitleChange} value={this.state.title} onBlur={() => {
          this.onUpdate();
          this.setState({
            title: this.state.title,
            tags: this.state.tags,
            content: this.state.content,
            isTitleEditing: false,
            isTagsEditing: this.state.isTagsEditing,
            isContentEditing: this.state.isContentEditing,
          }); }} autoFocus
        /></div>
      );
    } else {
      return (
        <div className="render_title" onClick={() => this.setState({ isTitleEditing: true, title: this.props.post.title, tags: this.props.post.tags, content: this.props.post.content })}> {this.props.post.title} </div>
      );
    }
  }

  onTagsRender() {
    if (this.state.isTagsEditing) {
      return (
        <div><input className="render_tags" onChange={this.onTagsChange} value={this.state.tags} onBlur={() => {
          this.onUpdate();
          this.setState({
            title: this.state.title,
            tags: this.state.tags,
            content: this.state.content,
            isTitleEditing: this.state.isTitleEditing,
            isTagsEditing: false,
            isContentEditing: this.state.isContentEditing,
          }); }} autoFocus
        /></div>);
    } else {
      return (
        <div className="render_tags" onClick={() => this.setState({ isTagsEditing: true, tags: this.props.post.tags, content: this.props.post.content, title: this.props.post.title })}> {this.props.post.tags} </div>
      );
    }
  }

  onContentRender() {
    console.log(this.props.post.content);
    if (this.state.isContentEditing) {
      return (
        <div className="render_content"><input onChange={this.onContentChange} value={this.state.content} onBlur={() => {
          this.onUpdate();
          this.setState({
            title: this.state.title,
            tags: this.state.tags,
            content: this.state.content,
            isTitleEditing: this.state.isTitleEditing,
            isTagsEditing: this.state.isTagsEditingse,
            isContentEditing: false,
          }); }} autoFocus
        /></div>);
    } else {
      return (
        <div onClick={() => this.setState({ isContentEditing: true, content: this.props.post.content, tags: this.props.post.tags, title: this.props.post.title })} dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />
      );
    }
  }

  render() {
    if (this.props.post != null) {
      return (
        <div className="page">
          {this.onTitleRender()}
          {this.onTagsRender()}
          {this.onContentRender()}
          <div>Created by: {this.props.post.author}</div>
          <button onClick={this.onDelete}>Delete</button>
        </div>
    );
    } else {
      return (<div className="loading">Loading...</div>);
    }
  }
}

const mapStateToProps = (state) => (
  {
    // props.post ^
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(ShowPost);
