import React from 'react'
import BigItem from '../BigItem/'
import { getNextTenLaunches} from '../../store/actions/launches'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../Loader/'
import {useDispatch, useSelector} from 'react-redux'

const Gallery = () => {
  const dispatch = useDispatch()
  const {launches, count} = useSelector(state => state.launches)

  const nextTenLaunches = () => {
    dispatch(getNextTenLaunches(count))
  }

  return (
    <InfiniteScroll
      dataLength={launches.length}
      next={nextTenLaunches}
      hasMore={true}
      loader={<Loader />}
    >
      {launches.map(item => {
        return(
          <BigItem 
            key={item.id + item.name} 
            item={item}
          />
        )
      })}
    </InfiniteScroll>
  )
}

export default Gallery