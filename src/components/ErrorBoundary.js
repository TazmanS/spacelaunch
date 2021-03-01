import React from 'react'
import {connect} from 'react-redux'
import ErrorBody from '../pages/ErrorBody'
import {setError} from '../store/actions/error'

class ErrorBoundary extends React.Component {

  static getDerivedStateFromError() {
    this.props.setError()
  }
  render() {
    if (this.props.error) {
      return (
        <ErrorBody/>
      )
    }

    return this.props.children; 
  }
}

function mapStateToProps(state) {
  return{
    error: state.error.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setError: () => dispatch( setError() )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorBoundary)