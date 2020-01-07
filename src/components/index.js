// 导入组件，组件必须声明 name
import shoppingcart from './ShoppingCart.vue'

// 为组件提供 install 安装方法，供按需引入
shoppingcart.install = function (Vue) {
  Vue.component(shoppingcart.name,shoppingcart)
}

// 默认导出组件
export default shoppingcart