import React, { Component } from 'react'
import SortMenu from './SortMenu';
import Delete from './Delete';
import Edit from './Edit';


export class Main extends Component {
  render() {
    return (
      <div>
        Main Works!!
<SortMenu/>
<Delete/>
<Edit/>

      </div>
    )
  }
}

export default Main
