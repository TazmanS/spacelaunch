import React from 'react'
import BigItem from '../components/BigItem'
import { getNextTenLaunches} from '../store/actions/launches'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../components/Loader'
import {useDispatch, useSelector} from 'react-redux'

const Gallery = () => {
  const dispatch = useDispatch()
  const {launches, count} = useSelector(state => state.launches)

  return (
    <InfiniteScroll
      dataLength={launches.length}
      next={() => dispatch(getNextTenLaunches(count))}
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