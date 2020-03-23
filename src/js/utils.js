/*
 * @Author: Siwen
 * @Date: 2020-03-23 19:26:57
 * @LastEditors: Siwen
 * @LastEditTime: 2020-03-23 19:58:36
 * @Description: 
 */
export default {
  /**
   * 字符串超长省略
   * @param {string} str 对象字符串
   * @param {string} len 目标长度
   * @return 处理结果字符串
   */
  cutString(str, len) { 
    //length属性读出来的汉字长度为1 
    if (str.length * 2 <= len) return str
    let strlen = 0
    let s = ''
    for (let i = 0; i < str.length; i++) { 
      s = s + str.charAt(i)
      if (str.charCodeAt(i) > 128) { 
        strlen = strlen + 2
        if (strlen >= len) { 
          return s.substring(0, s.length - 1) + '...'
        } 
      } else { 
        strlen = strlen + 1
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...'
        } 
      } 
    } 
    return s
  }
}
