import React, {useState, useEffect} from 'react'
import './Timer.scss'

const Timer = ({time}) => {
  const [remote, setRemote] = useState(null)
  
  useEffect(() => {
    let timer = setInterval(() => {
      let launchTime = new Date(time).getTime()
      let dateNow = new Date().getTime()

      setRemote(launchTime - dateNow)
    }, 1000);
    
    return () => clearInterval(timer)
  }, [time])

  
  return (
    <div className="timer">
      <div>
        {new Date(remote).getMonth() < 10
          ? '0' + new Date(remote).getMonth()
          : new Date(remote).getMonth()
        } : 
      </div>
      <div>
        {new Date(remote).getDay() < 10
          ? '0' + new Date(remote).getDay()
          : new Date(remote).getDay()
        } : 
      </div>
      <div>
        {new Date(remote).getHours() < 10
          ? '0' + new Date(remote).getHours()
          : new Date(remote).getHours()
        } : 
      </div>   
      <div>
        {new Date(remote).getMinutes() < 10
          ? '0' + new Date(remote).getMinutes()
          : new Date(remote).getMinutes()
        } : 
      </div>
      <div>
        {new Date(remote).getSeconds() < 10
          ? '0' + new Date(remote).getSeconds()
          : new Date(remote).getSeconds()
        }
      </div>
    </div>
  )
}

export default Timer