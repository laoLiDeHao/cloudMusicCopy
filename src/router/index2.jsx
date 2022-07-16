/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-07-11 10:02:26
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-07-15 15:35:54
 * @FilePath: \MusicPlayer\src\router\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Mainpage from '../component/Mainpage'
import Discover from '../component/Discover/Discover'
// discover的组件
import DRecommend from '../component/Discover/child/D-recommend'
import DRanking from '../component/Discover/child/D-ranking'
import DSonsheet from '../component/Discover/child/D-sonsheet'
import DStation from '../component/Discover/child/D-station'
import DSinger from '../component/Discover/child/D-singer'
import DNewdisc from '../component/Discover/child/D-newdisc'

const rootlist = [
    {
        path: "/",
        component: <App />,
        children: [
            {
                path: "/",
                component: <Mainpage />,
                children: [
                   {
                    path: "/Discover",
                    component: <Discover />,
                    children:[
                        {
                            path: '/Discover/DRecommend',
                            component:<DRecommend />, 
                        },
                        {
                            path: '/Discover/DRanking',
                            component:<DRanking />, 
                        },
                        {
                            path: '/Discover/DSonsheet',
                            component:<DSonsheet />, 
                        },
                        {
                            path: '/Discover/DStation',
                            component:<DStation />, 
                        },
                        {
                            path: '/Discover/DSinger',
                            component:<DSinger />, 
                        },
                        {
                            path: '/Discover/DNewdisc',
                            component:<DNewdisc />, 
                        },
                    ]
                   }
                ]
            }
        ]
    }
]

const createRoute = (list)=>list.map(item=>(<Route path={item.path} element={item.component}>
    {item.children&&createRoute(item.children)}</Route>))


const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
          {
          createRoute(rootlist)
          }
        </Routes>
    </BrowserRouter>
)
export default BaseRouter