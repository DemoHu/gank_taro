import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './header.scss'

function Header() {
  return (
    <View>
      <View className="header">
        <View className="menu">
          <AtIcon value='menu' size='20' color='#B1B1C1'></AtIcon>
        </View>
        <Image className="logo" src="https://puui.qpic.cn/fans_admin/0/3_1221609656_1582636717659/0" />
        <View className="search">
          <AtIcon value='search' size='20' color='#B1B1C1'></AtIcon>
        </View>
      </View>
    </View>
  )
}

export default Header