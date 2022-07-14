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
const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Mainpage />}>
                    <Route path='/Discover' element={<Discover />}>
                        <Route index element={<DRecommend />}></Route>
                        <Route path='/Discover/DRecommend' element={<DRecommend />}></Route>
                        <Route path='/Discover/DRanking' element={<DRanking />}></Route>
                        <Route path='/Discover/DSonsheet' element={<DSonsheet />}></Route>
                        <Route path='/Discover/DStation' element={<DStation />}></Route>
                        <Route path='/Discover/DSinger' element={<DSinger />}></Route>
                        <Route path='/Discover/DNewdisc' element={<DNewdisc />}></Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default BaseRouter