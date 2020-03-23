import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { useState, useEffect } from '@tarojs/taro'
import './banner.scss'

function Banner(props) {
  const [bannerList, setBannerList] = useState([])

  useEffect(() => {
    getBanner()
  }, [])

  /* 获取首页banner */
  const getBanner = () => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'https://gank.io/api/v2/banner'
      }).then(res => {
        setBannerList(res.data.data)
      })
    })
  }
  const bannerInfo = (item) => {
    console.log(item)
  }

  return (
    <View  className="banner">
      <Swiper indicatorDots autoplay interval="3000" circular>
        {
          bannerList.map((item, index) => {
            return (
              <SwiperItem className="banner_item" key={index}>
                <Image src={item.image} className='slide_image' mode="aspectFill" onClick={() => bannerInfo(item)}></Image>
                <Text className="slide_title">{ item.title }</Text>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    </View>
  )
  
}
export default Banner
