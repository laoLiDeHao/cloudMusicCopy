/*
 * @Author: Ember.PL 1084861534@163.com
 * @Date: 2022-07-15 10:19:03
 * @LastEditors: Ember.PL 1084861534@163.com
 * @LastEditTime: 2022-07-15 10:42:20
 * @FilePath: \MusicPlayer\src\component\spares\subSelector\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Listsub from './subs/Listsub'
import Discsub from './subs/Discsub'
import Ranksub from './subs/Ranksub'

const App = (props) => {
    return (<div>
        {props.sub === 'list' && <Listsub />}
        {props.sub === 'disc' && <Discsub />}
        {props.sub === 'rank' && <Ranksub />}
    </div>)


}
export default App