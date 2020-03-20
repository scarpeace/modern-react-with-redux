import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import {fetchStream, editStream} from '../../actions/index'
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit =(formValues) =>{
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    console.log(this.props.stream)
    return (
    <div>
      <div>
        <h3>Edit a Stream</h3>
        {/* Initial Values é uma propriedade específica do REDUX, ela recebe um objeto e aloca as informações de acordo com o "name" do field */}
        {/* o pick pega o objeto e retorna somente os registros que tão em amarelo */}
        <StreamForm initialValues={_.pick(this.props.stream, 'title','description')} onSubmit={this.onSubmit}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  const {id} = ownProps.match.params
  return { stream: state.streams[id] }
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);