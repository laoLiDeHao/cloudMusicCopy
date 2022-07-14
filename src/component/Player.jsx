import './less/Player.less'
// antd额外
import { Slider, Switch } from 'antd';
// antd
import {
    LeftCircleOutlined, RightCircleOutlined, PauseCircleOutlined, PlayCircleOutlined,
    ProfileOutlined, ReadOutlined, FolderAddOutlined, ShareAltOutlined, LinkOutlined, setTwoToneColor
} from '@ant-design/icons';
import { useState, useEffect,useRef } from 'react';
// import Sider from 'antd/lib/layout/Sider';

const Player = () => {
    const audioTag = useRef(null)

    // 是否刚加载
    let initNum = -1
    // 状态参数是否播放
    let [isplay, setIsplay] = useState(false)
    useEffect(()=>{
        // console.log(audioTag.current)
        isplay&&audioTag.current.play()
        !isplay&&audioTag.current.pause()
    },[isplay])
    // 目前播放的歌曲
    let [playing, setPlaying] = useState(
        {
            id: 1,
            src: 'https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/snakeEyes.png',
            name: 'snakeEyes',
            auther: 'Feint,CoMa',
            lyric: null,
            longest: 264,
            music:"https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/Feint,CoMa - Snake Eyes.mp3",
            inAudio: false
        }
    )
    // 进度条参数

    let [nowTime, setNowtime] = useState(0)
    // 当拖动进度条时，将已播放位置换单对应位置
    let changeSilder = (value) => {

        setNowtime(parseInt(playing.longest * value / 100))

    }
    // 歌词显示
    let [showlyric, setShowlyric] = useState(false)
    let changelyric = () => {
        setShowlyric(!showlyric)
    }
    // 歌单设置
    // 循环方式  列表播放once  随机播放random 单曲循环 oneLoop 列表循环 listLoop
    let [playmode, setPlaymode] = useState('once')
    // 显示歌单
    let [showlist, setShowlist] = useState(false)
    // 歌单长度
    let [listlength, setListlength] = useState(2)//歌单长度
    let [current, setCurrent] = useState(0)//正在播放的编号

    // 当前歌单
    let [playlist, setPlaylist] = useState([
        {
            id: 1,
            src: 'https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/snakeEyes.png',
            name: 'snakeEyes1',
            auther: 'Feint,CoMa',
            lyric: null,
            longest: 264,
            music:"https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/Feint,CoMa - Snake Eyes.mp3",
            inAudio: false
        }, {
            id: 2,
            src: 'https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/snakeEyes.png',
            name: '晴天',
            auther: 'jay',
            lyric: null,
            longest: 269,
            music:"https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/晴天-周杰伦.mp3",
            inAudio: true
        }, {
            id: 3,
            src: 'https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/snakeEyes.png',
            name: 'snakeEyes3',
            auther: 'Feint,CoMa',
            lyric: null,
            longest: 264,
            music:"https://7463-tcb-rwz8hgko3aa5d3-0dwkv2bc58252-1312627499.tcb.qcloud.la/Feint,CoMa - Snake Eyes.mp3",
            inAudio: false
        }
    ])
    // 默认第一首
    // setPlaying(playlist[0])
    // 切换歌曲
    let changeMusic =(item) => {
        initNum ++
        setIsplay(false)
        let temp = playlist
        temp.forEach(each => {
            each.inAudio = false
            if (each.id === item.id) each.inAudio = true
        })
        //  console.log(temp)
        setPlaylist([...temp])
        setPlaying(item)
        
        setTimeout(()=>{
            // console.log(audioTag.current)
            // console.log('hello')
            // if(isplay){
            //     setIsplay(true)
            //     audioTag.current.play()
            // }else{
               !initNum&& setIsplay(true)
            // }
            console.log(isplay)
            
        },)
    }
    // 修改当前播放编号 点击歌单
    let clickListToChangeCurrent = (val)=>{
        // setCurrent(val)
        for(let i = 0 ; i <= listlength;i++ ){
            if(playlist[i].id === val){
                setCurrent(i)
                return
            }
        }
    }
    // 修改当前播放编号 上一曲，下一曲
    let changeCurrent = (val) => {
        val += current
        if (val > listlength) val = 0
        if (val < 0) val = listlength
        setCurrent(val)
    }
    // 关联playing和current
    useEffect(() => {
        let temp = playlist[current]
        changeMusic(temp)
        // console.log("effect current&&playing",temp)
    }, [current])
    // 切歌后自动播放

    // let autoPause=()=>{setTimeout(setIsplay(false),500)}
   
    return (
        <div className='Player_main'>
            <audio
                ref={audioTag}
                key={playing.id}
                id={playing.id}
                // controls
                src={playing.music}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <div className='Player_ctrl'>
                <LeftCircleOutlined style={{ fontSize: '28px' }} onClick={() => { changeCurrent(-1) }} />
                <div onClick={() => { setIsplay(!isplay) }}
                    style={{ fontSize: '40px' }}>
                    {isplay ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                </div>

                <RightCircleOutlined style={{ fontSize: '28px' }} onClick={() => { changeCurrent(1) }} />
            </div>
            <div className='Player_vision'>
                <div className='Player_photo'>
                    <img src={playing.src} alt="" />
                </div>
                <div className='Player_playInfo'>
                    {/* 名字，歌手 */}
                    <div >
                        <span style={{ color: "white", fontWeight: "700", fontSize: "15px" }}>{playing.name}</span>
                        <span>{playing.auther}</span>
                    </div>
                    {/* 进度条 */}
                    <div>
                        <div className='Player_silderBox'>
                            <Slider defaultValue={nowTime} onAfterChange={(value) => { changeSilder(value) }} disabled={false} />
                        </div>
                        <div className='Player_timeBox'>
                            <span>{parseInt(nowTime / 60)}:{nowTime % 60}</span>/
                            <span>{parseInt(playing.longest / 60)}:{playing.longest % 60}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Player_share'>
                {/* 歌词 收藏 分享 */}
                {showlyric ? <ProfileOutlined onClick={changelyric} /> : <ReadOutlined onClick={changelyric} />}
                <FolderAddOutlined />
                <ShareAltOutlined />
            </div>
            <div className='Player_list'><div></div>
                {/* 声音 */}
                <span className="iconfont">&#xe674;</span>
                {/* 循环方式 */}
                <span className="iconfont" style={playmode === 'once' ? {} : { display: 'none' }} onClick={() => { setPlaymode('random') }}>&#xe802;</span>
                <span className="iconfont" style={playmode === 'random' ? {} : { display: 'none' }} onClick={() => { setPlaymode('oneLoopnce') }}>&#xea7c;</span>
                <span className="iconfont" style={playmode === 'oneLoopnce' ? {} : { display: 'none' }} onClick={() => { setPlaymode('listLoop') }}>&#xe6a2;</span>
                <span className="iconfont" style={playmode === 'listLoop' ? {} : { display: 'none' }} onClick={() => { setPlaymode('once') }}>&#xe6a3;</span>
                {/* 播放列表 */}
                <span className="iconfont" onClick={() => { setShowlist(!showlist) }}>&#xe6be;</span>

            </div>

            {/* 可隐藏播放列表 */}
            <div className='Player_togglelist' style={(showlist ? { display: "flex" } : { display: 'none' })}>
                {/* 歌单 */}
                <div className='Player_playlist'>
                    <div>
                        <div>播放列表</div>
                        <div>
                            <div>收藏</div>
                            <div>清除</div>
                        </div>
                    </div>
                    <div>
                        {
                            // 这是歌单
                            playlist.map(item =>
                            (<div
                                key={item.id}
                                onClick={() => { clickListToChangeCurrent(item.id) }}
                                className={item.inAudio ? "music_inlist music_playing" : "music_inlist"}>
                                <div>{item.name}</div>
                                <div>{item.auther}</div>
                                <div>{parseInt(item.longest / 60)}:{item.longest % 60}</div>
                                <div><LinkOutlined /></div>
                            </div>)
                            )
                        }
                    </div>
                </div>
                {/* 歌词 */}
                <div className='Player_playingLyric'>
                    <div>{playing.name}</div>
                    <div>抱歉，暂无歌词</div>
                </div>
            </div>
        </div>
    )
}

export default Player