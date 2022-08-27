import React, { Component } from 'react';

import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
  comma: 188,
  enter: 13,
  semicolon: 186,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.semicolon];
class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [

      ],
      suggestions: [

      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }
  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }
  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }
  render() {

    let placeholder = "Add other foodtypes : Press enter or ; or , to add "
    const { tags, suggestions } = this.state;
    return (
      <div >
        <ReactTags tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Tags;