import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {

      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link  >
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
    return <div></div>
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to='/streams/new'>
            <button className='ui button primary right floated'>Create Stream</button>
          </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  //O Object.values converte o grande objeto que é o streams ,por conta do mapKeys, para um array. Facilitando assim iterar o maldito.
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { fetchStreams: fetchStreams })(StreamList);