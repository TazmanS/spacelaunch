import React from 'react'
import './ErrorBody.css'
import {useDispatch} from 'react-redux'
import {deleteError} from '../../store/actions/error'
import BigButton from '../../components/BigButton/'

const ErrorBody = () => {
  const dispatch = useDispatch()
  return (
    <div className="error">
      <div className="error__text">Something went wrong. Please, try again in a little bit</div>
      <BigButton 
        click={() => dispatch(deleteError())}
        >Main Page
      </BigButton>
    </div>
  )
}

export default ErrorBody