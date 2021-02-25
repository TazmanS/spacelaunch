import React, {useEffect} from 'react'
import BigItem from '../components/BigItem'
import Slider from '../components/Slider'
import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import {getFirsTenLaunches, getNextTenLaunches} from '../store/actions/launches'
import {getEvents} from '../store/actions/events'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../components/Loader'


const Home = () => {
  const dispatch = useDispatch()
  const {launches, count} = useSelector(state => state.launches)
  const {events} = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getFirsTenLaunches())
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="Home">

      <div className="Header">
        <div className="Header__content">
          <img src="/bigLogo.svg" alt=""/>
        </div>
      </div>

      <div className="Home__sectionOne SectionOne">
        <div className="SectionOne__title">
          Upcoming Spaceflight Launches
        </div>
        <div className="SectionOne__text">
          View all launches available - including launches from the past and utilize powerful search filters.
        </div>
        <button className="SectionOne__button">
          Show All Launches
        </button>
      </div>

      <div className="Home__sectionTwo SectionTwo">
        <div className="SectionTwo__container">
          <div className="SectionTwo__slider Slider">
            <Slider items={events} />
          </div>
          <div className="SectionTwo__gallery Gallery">
            <div className="Gallery__title">
              Spaceflight Launches
            </div>
            <div className="Gallery__content">
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
            </div>
          </div>
        </div>
      </div>

      <div className="Home__footer">
        <img src="/bigLogo.svg" alt="" />
        © 2021 Copyright
      </div>
    </div>
  )
}

export default Home