/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-07-13 20:00:47
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-07-15 00:26:02
 * @FilePath: \MusicPlayer\src\component\Discover\child\D-recommend.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './D-recommend.less'
import Carousel from '../../spares/Carousel'
import Chucklab from '../../spares/Chucklab'

// 推荐页面右边的结构
const leftItem = [
  {
    id:1,
    title:"热门推荐",
    to:"##",
    btn:1,
    parts:[
      {
        id:101,
        title:"华语",
        to:"##",
      },
      {
        id:102,
        title:"流行",
        to:"##",
      },
      {
        id:103,
        title:"摇滚",
        to:"##",
      },
      {
        id:104,
        title:"民谣",
        to:"##",
      },
      {
        id:105,
        title:"电子",
        to:"##",
      },
    ]
  },
  {
    id:2,
    title:"新碟上架",
    to:"##",
    btn:2,
    parts:[]
  },
  {
    id:3,
    title:"榜单",
    to:"##",
    parts:[]
  }
]
const App = ()=>{
    
    

    const data = [{
        id:0,
        route:"@",
        src:"../../static/rec_carousel/c1.jpg"
      },{
        id:1,
        route:"@",
        src:"../../static/rec_carousel/c2.jpg"
      },{
        id:2,
        route:"@",
        src:"../../static/rec_carousel/c3.jpg"
      },{
        id:3,
        route:"@",
        src:"../../static/rec_carousel/c4.jpg"
      },{
        id:4,
        route:"@",
        src:"../../static/rec_carousel/c5.jpg"
      },{
        id:5,
        route:"@",
        src:"../../static/rec_carousel/c6.jpg"
      },{
        id:6,
        route:"@",
        src:"../../static/rec_carousel/c7.jpg"
      },{
        id:7,
        route:"@",
        src:"../../static/rec_carousel/c8.jpg"
      },]
    const ad_link = {
      src :'../../static/download.png',
      path:"/download"
    }
    return <div>
        <div className="CarouselInRec">
            <Carousel data={data} ad_link={ad_link}/>
        </div>
        <div className='D-rec_main'>
          <div className='left'>
            {leftItem.map(item=><Chucklab key={item.id} data={item}>
              <h1>hahahahahahahha</h1>
            </Chucklab>)}
          </div>
          <div className='right'></div>
        </div>
    </div>
}

export default App