
import { Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const contentStyle = {

  height: '300px',
  background: '#E0E0E0',
  display: "flex"

};
const linkStyle = {
  // display:"block",
  width: "1025px",
  height: "300px",
  margin: 'auto',
  display: "flex"
}
const divStyle = {
  width: "100%",
  height: "100%",
  // display:"flex",
  // justifyContent:"center"
}
const Carousel_adStyle = {
  width: '255px',
  height: "300px",
  background: "#000000"
}
const imgStyle = {
  height: "300px"
}

const aStyle = {
  display:"block",
  width:"255px",
  height:"280px",
  overflow:"hidden"
}



/*
// 需要传入 data和ad进行渲染
    const data = [{
        id:0,
        route:"@",
        src:"../../static/rec_carousel/c1.jpg"
      },{
        id:1,
        route:"@",
        src:"../../static/rec_carousel/c2.jpg"
      },...]
    const ad_link = {
      src :'../../static/download.png',
      path:"/download"
    }

*/ 
const App = (props) => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
    console.log(props)
  };

  return (
    <Carousel style={divStyle} afterChange={onChange}>
      {props.data.map(item => (
        <div key={item.id} >
          <div style={contentStyle}>
            <div style={linkStyle} >
              {/* 轮播部分 */}
              <Link to={item.route}>
                <img style={imgStyle} src={item.src} alt="" />
              </Link>
              {/* 下载广告 */}
              <div style={Carousel_adStyle} className='Carousel_ad'>
                <div>
                  <a href={props.ad_link.path} style={aStyle}>
                    <img src={props.ad_link.src} alt="" />
                  </a>

                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </Carousel>
  );
};

export default App;