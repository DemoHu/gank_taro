import { View, Text, Image } from '@tarojs/components'
import './girl.scss'

function Girl(props) {
  const categoryInfo = props.categoryInfo
  
  const viewCategoryInfo = () => {
    console.log(categoryInfo.url)
  }
  return (
    <View className="girl_item" onClick={() => viewCategoryInfo()}>
      <View>
        <Text className="tags">妹纸</Text>
        <Text className="title">妹纸图{categoryInfo.title}</Text>
      </View>
      <View className="main_box">
        <View className="left">
          <Image className="avatar" src="https://puui.qpic.cn/fans_admin/0/3_1218999906_1582635476063/0"></Image>
          <Text>{categoryInfo.author}</Text>
          <Text className="jiange">—</Text>
          <Text>妹纸</Text>
        </View>
        <View className="right">
          <Text>{categoryInfo.createdAt}</Text>
        </View>
      </View>
      <View className="image_box">
        <Image className="images" mode="aspectFill" src={categoryInfo.images[0]}></Image>
      </View>
    </View>
  )
}

export default Girl
