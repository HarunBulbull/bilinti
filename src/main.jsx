
import { Layout } from './layouts/LayoutManager.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import tr_TR from "antd/lib/locale/tr_TR";
import { ConfigProvider } from "antd";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ConfigProvider locale={tr_TR}>
      <Layout>
        <App />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
)
