import './less/Mainpage.less'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import require from 'react'
import logo from '../static/cloudMusic.png'
import { Input, Button } from 'antd';

const Mainpage = () => {
    let nav = [
        { id: 1, title: "发现音乐",route:"/Discover" },
        { id: 2, title: "我的音乐",route:"##"  },
        { id: 3, title: "关注",route:"##"  },
        { id: 4, title: "商城" ,route:"##" },
        { id: 5, title: "音乐人" ,route:"##" },
        { id: 6, title: "下载客户端" ,route:"##" }
    ]
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const linkStyle={
        fontSize:"15px",
        fontWeight:"700",
        color:"white",
    }

    let { pathname } = useLocation()
    const navigate = useNavigate()
  
    useEffect(() => {
      if (pathname === '/') {
        navigate('/Discover')
      }
    }) //首页



    return (<div className="Mainpage">
        <div className='Mainpage_nav'>
            <div>
                {/* zuobian */}
                <div>
                    <div className='Mainpage_logo'>
                        <div> <img src={logo} alt="" /></div>
                        <div>枪版云音乐</div>
                    </div>
                    <div className='Mainpage_nav'>
                        {nav.map((item) => {
                            return (
                                <div key={item.id}><Link style={linkStyle} to={item.route}>{item.title}</Link></div>
                                
                            )
                        })}
                    </div>
                </div>
                {/* youbian */}
                <div>
                    <div> <Search placeholder="音乐/视频/电台/用户" onSearch={onSearch} enterButton /></div>
                    <div> <Button ghost>开发者中心</Button> </div>
                    <div> <Button type="primary" size='small'>登录</Button></div>
                </div>
            </div>
        </div>
        <div className='Mainpage_Outlet'>
            <Outlet/>
        </div>
    </div>)

}

export default Mainpage