import '@/styles/globals.css'
import 'antd/dist/reset.css'
import Menu from '../components/menu/Menu'
import { Layout } from 'antd';

const { Header } = Layout;

export default function App({ Component, pageProps }) {

  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}
