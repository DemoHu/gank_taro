import { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon, AtLoadMore } from 'taro-ui'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Tabs from '../components/tabs/tabs'
import Girl from '../../components/girl/girl'
import Acticle from '../../components/acticle/acticle'
import Footer from '../../components/footer/footer'
import './index.scss'

function Index(props) {
  const config = {
    navigationBarTitleText: '首页'
  }
  const [loading, setLoading] = useState(true)
  const [cateType, setCateType] = useState('')
  const [categoryList, setCategoryList] = useState([])
  const [moreStatus, setMoreStatus] = useState('noMore')
  const [page, setPage] = useState(1)
  let dataArr = []

  useEffect(() => {
    if (cateType) {
      getCategory(cateType, page)
    }
  }, [cateType])
  const handleCateType = (type) => {
    dataArr = []
    setPage(1)
    setLoading(true)
    setCategoryList([])
    setCateType(type)
  }
  const getCategory = (type, page) => {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: `https://gank.io/api/v2/data/category/All/type/${type}/page/${page}/count/10`
      }).then(res => {
        const data = res.data.data
        const maxPage = Math.ceil(res.data.counts / 10)
        const isMore = page < maxPage ? 'more' : 'noMore'
        setMoreStatus(isMore)
        data.forEach(item => {
          dataArr.push(JSON.parse(item))
        })
        setCategoryList([...categoryList, ...dataArr])
        setLoading(false)
      }).catch(err => {
        setLoading(false)
      })
    })
  }
  const moreData =() => {
    setMoreStatus('loading')
    const _page = page + 1
    setPage(_page)
    getCategory(cateType, _page)
  }
  return (
    <View className="home">
      <Header></Header>
      <Banner></Banner>
      <Tabs handleCateType={handleCateType}></Tabs>
      <View className="category_list">
        {loading && <AtIcon className="loading_ani" value='loading' size='30' color='#2c63ff' />}
        {
          categoryList.map((item, index) => {
            return (
              cateType === 'Girl' ? 
              <Girl categoryInfo={item} key={index}></Girl> : <Acticle categoryInfo={item} key={index}></Acticle>
            )
          })
        }
        {!loading && <AtLoadMore onClick={() => moreData()} status={moreStatus} />}
      </View>
      <Footer></Footer>
    </View>
  )
}
export default Index

