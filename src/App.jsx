import './App.less'
import {useState} from 'react'
import { Button, DatePicker, version } from "antd";
import { UnlockOutlined ,LockOutlined  } from '@ant-design/icons';
import Player from './component/Player'
import { Outlet } from 'react-router-dom';
function App() {
  const [isShowPlayer ,setIsShowPlayer] = useState(true)

  return (
    <div className="App">
      <div id="HTMLArea">
        <Outlet/>
      </div>
      <div id="Player" className={isShowPlayer?'Player-show':'Player-hide'}>
        <div>
          <div  onClick={()=>{setIsShowPlayer(!isShowPlayer)}}>
            {isShowPlayer?<UnlockOutlined/>:<LockOutlined />}
          </div>
        </div>
        <div>
          <Player/>
        </div>
      </div>
    </div>
  )
}

export default App
