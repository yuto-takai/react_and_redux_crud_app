import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table' 

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class EventsIndex extends Component {
  componentDidMount() {
    // componentがマウントされたタイミングでreadEventsでイベントを全県取得してきたい
    // 具体的な処理はActionsに書く
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      // 一意のkeyを渡す必要
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }
// constructorでやってることはReducerでやることになるので不要
  render() {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12,
    }
    return( 
      <React.Fragment>
        <FloatingActionButton style={style}ontainerElement={<Link to='events/new' />}>
          <ContentAdd/>
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
     )
  }
}

// stateをpropsとしてmappingする
// state.eventsには、reducerで整形した結果のevent一覧が返ってきている
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = dispatch => ({
  // こうするとthis.props.readEventsとしてアクションが使えるようになる
  readEvents: () => dispatch(readEvents()),
})

// 省略した書き方
// const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

 