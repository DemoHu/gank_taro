import { View, Text, Image } from '@tarojs/components'
import utils from '../../js/utils'
import './acticle.scss'

function Acticle(props) {
  const categoryInfo = props.categoryInfo

  const typeFilter = (type) => {
    switch (type) {
      case 'frontend':
        return '前端'
      case 'backend':
        return '后端'
      case 'app':
        return 'APP'
      case 'Girl':
        return '妹纸'
      default:
        return type
    }
  }
  return (
    <View className="acticle">
      {
        categoryInfo.images[0] &&
        <View className="left">
          <Image className="item_images" mode="aspectFill" src={categoryInfo.images[0]}></Image>
        </View>
      }
      <View className="right">
        <View className="title_tags_box">
          <Text className="title">
            <Text className="tags">{typeFilter(categoryInfo.type)}</Text>
            {categoryInfo.title}
          </Text>
        </View>
        <View className="author_box">
          <Text>{categoryInfo.author}</Text>
          <Text className="jiange">—</Text>
          <Text>{typeFilter(categoryInfo.type)}</Text>
        </View>
        <View className="desc">{utils.cutString(categoryInfo.desc, 55)}</View>
        <View className="date">{categoryInfo.createdAt}</View>
      </View>
    </View>
  )
}

export default Acticle