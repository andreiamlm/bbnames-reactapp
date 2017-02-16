import React, { Component } from 'react'

class NamesList extends Component {

  render() {
    const { data, filterText } = this.props;

    const namesList = data
      .filter(name => {
        // remove names that do not match current filter text
        return name.name.indexOf(filterText) >= 0
      })
      .map(name => {
        return (
          <li key={name.id} className={name.sex}>{name.name}</li>
        )
    })
    return (
      <div>
        <ul>
          {namesList}     
        </ul>
      </div>
    );
  }
}

export default NamesList;
