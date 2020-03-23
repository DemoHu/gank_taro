import { View, Text } from '@tarojs/components'
import { useState, useEffect } from '@tarojs/taro'
import './tabs.scss'

function Tabs(props) {

  const [categories, setCategories] = useState([])
  const [selectType, setSelectType] = useState('')
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://gank.io/api/v2/categories/Article'
      }).then(res => {
        const data = res.data.data.reverse()
        setCategories(data)
        setSelectType(data[0].type)
        props.handleCateType(data[0].type)
      })
    })
  }
  const selectCategories = (item) => {
    setSelectType(item.type)
    props.handleCateType(item.type)
  }

  return (
    <View className="categories">
      <View className="categories_box">
        { categories.map((item, index) => {
          return (
            <Text 
              className={selectType === item.type ? 'active categories_item' : 'categories_item'}
              onClick={() => selectCategories(item)}
            >{ item.title }</Text>
          )
        })}
      </View>
    </View>
  )
}
export default Tabs