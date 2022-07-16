/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-07-14 22:09:20
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-07-15 09:26:28
 * @FilePath: \MusicPlayer\src\component\spares\Chucklab.jsx
 * @Description: 红底的展示框，后面页面都可以用
 */

/*
参数
{
    id:1,     key
    title:"热门推荐",    标题
    to:"##",            跳转目标
    btn:1,              跳转按钮样式，不需要不传
    parts:[             分类跳转  不需要不传
          {
        id:101,
        title:"华语",
        to:"##",
      }
    ]            
}

*/

import {PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const boxStyle = {
    width: "100%",
    minHeight: "50px",
    // border:"1px solid red",
    paddingBottom: "10px"
}

const titleStyle = {
    width: '100%',
    height: "40px",
    borderBottom: "3px solid red",
    display: "flex",
    alignItems: 'center',
    justifyContent:"space-between"
}
const btn2Style = {
    display:"block",
    width:"40px",
    height:"20px",
    fontSize:"10px",
    color:"white",
    background:"#B52B2E",
    borderRadius:'3px' ,
    textAlign:"center"
}


const App = (props) => {


    return (<div style={boxStyle}>
        <div style={titleStyle} >
            <div style={{
                 display: "flex",
                 alignItems: 'center'
            }}>
                <div style={{ marginRight: "5px", display: "flex", alignItems: 'center' }}><svg t="1657808908840"
                    className="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2196" width="18" height="18">
                    <path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 
                512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 
                469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 682.666666c-117.82 
                0-213.333333-95.513333-213.333333-213.333333s95.513333-213.333333 213.333333-213.333333
                 213.333333 95.513333 213.333333 213.333333-95.513333 213.333333-213.333333 213.333333z"
                        fill="#d81e06" p-id="2197"></path></svg>
                </div>
                <div style={{ fontSize: "25px", marginRight: "8px" }}>
                    {props.data.title}
                </div>
                <div>
                    {
                    // 分类跳转
                    props.data.parts&&props.data.parts.map(item=><Link key={item.id}  to={item.to} style={{color:"black"}}>{item.title}/</Link>)}
                </div>
            </div>
            <div>
                {/* 右侧跳转 */}
                {props.data.btn===1 && <Link to={props.data.to}  style={{color:"black"}}> 更多<PlusOutlined  style={{color:"#C20C0C",cursor:"pointer"}} /></Link>}
                {props.data.btn===2 && <Link to={props.data.to}  style={btn2Style}> 更多</Link>}
            </div>
        </div>
        <div>
            {props.children}
        </div>

    </div>)

}

export default App