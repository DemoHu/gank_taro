import { View, Text } from '@tarojs/components'
import './footer.scss'

function Footer() {
  return (
    <View className="footer">
      <Text className="title">主页</Text>
      <Text className="copyright">Copyright © 2015-2020 干货集中营 gank.io</Text>
    </View>
  )
}
export default Footer