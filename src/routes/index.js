//Layout
import HeaderOnly from '../components/Layout/HeaderOnly'


//Component
import Home from '../pages/Home'
import Selling from '../pages/Selling'
import DetailProduct from '../pages/DetailProduct'
import Cart from '../pages/CartPage'
import Log from '../pages/LogPage'
import AccountInfo from '../pages/AccountInfo'
import HistoryOrder from '../pages/HistoryOrder'
import Payment from '../pages/Payment'
import OrderDetail from '../pages/OrderDetail'


//không cần đăng nhập vẫn vào được
const publicRoutes = [
   {path: '/', component: Home},
   {path: '/selling', component: Selling},
   {path: '/detailProduct', component: DetailProduct},
   {path: '/cartpage', component: Cart},
   {path: '/log', component: Log, layout: HeaderOnly},
   {path: '/accountinfo', component: AccountInfo, layout: HeaderOnly},
   {path: '/historyorder', component: HistoryOrder},
   {path: '/payment', component: Payment, layout: HeaderOnly},
   {path: '/OrderDetail', component: OrderDetail}
];

//phải đăng nhập mới vào được
const privateRoutes = [
];

export {publicRoutes, privateRoutes}