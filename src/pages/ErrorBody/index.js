import React from 'react'
import './ErrorBody.css'
import {useDispatch} from 'react-redux'
import {deleteError} from '../../store/actions/error'
import BigButton from '../../components/BigButton/'

const ErrorBody = () => {
  const dispatch = useDispatch()

  const moveToMainPage = () => {
    dispatch(deleteError())
  }

  return (
    <div className="error">
      <div className="error__text">Something went wrong. Please, try again in a little bit</div>
      <BigButton 
        click={moveToMainPage}
      >
        Main Page
      </BigButton>
    </div>
  )
}

export default ErrorBody