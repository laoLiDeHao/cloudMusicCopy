import './less/Discover.less'
import Mininavigation from '../spares/Mininavigation';
import { Outlet } from 'react-router-dom';
const Discover = ()=>{
    const items = [
        {
            id:0,
            title:'推荐',
            router:'/Discover/DRecommend'
        },
        {
            id:1,
            title:'排行榜',
            router:'/Discover/DRanking'
        },
        {
            id:2,
            title:'歌单',
            router:'/Discover/DSonsheet'
        },
        {
            id:3,
            title:'主播电台',
            router:'/Discover/DStation'
        },
        {
            id:4,
            title:'歌手',
            router:'/Discover/DSinger'
        },
        {
            id:5,
            title:'新碟上架',
            router:'/Discover/DNewdisc'
        },

    ]

    return (
        <div className="Discover">
           <div className='Discvoer_top'>
                <Mininavigation items={items} />
           </div>
           <div >
            <Outlet></Outlet>
           </div>
        </div>
    )
}

export default Discover