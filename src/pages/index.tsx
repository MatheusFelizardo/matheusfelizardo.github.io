import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Home from '../components/Pages/Home'
import { useRouter } from 'next/router'
import { Tabs, Menu, Layout, notification } from 'antd';
import Projects from '../components/Pages/Projects'
import { Spin } from 'antd';
import { LoadingOutlined, UserOutlined, FileOutlined, SettingOutlined, CodeOutlined } from '@ant-design/icons';
import useLanguage from '../hooks/useLanguage'

const { Sider, Content } = Layout;

export interface PageProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>
  page?: number
}

const Main = ({ page = 0 }: {page: number}) => {
  const { language, translate, setLanguage } = useLanguage()
  const [currentKey, setCurrentKey] = useState('1')
  const [loading, setLoading] = useState(false)
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {label: translate('About me'), key: '1', icon: <UserOutlined />}, 
    {label: translate('Projects'), key: '2', icon: <CodeOutlined /> },
    {label: translate('Resume'), key: '6', icon: <FileOutlined />, children: [
      {label: <a download href="/documents/matheus-resume-en.pdf">{translate('In English')}</a>, key: '7'}, 
      {label: <a download href="/documents/matheus-curriculum-ptBr.pdf">{translate('In Portuguese')}</a>, key: '8'}] },
    {label: translate('Language'), key: '3', icon:  <SettingOutlined />, children: [
      {label: translate('English'), key: '4'}, 
      {label: translate('Portuguese'), key: '5'}] }
  ]
  const [showPage, setShowPage] = useState(1)

  const pages = {
    1: < Home/>,
    2: <Projects />
  }


  const changePage = ({key}: {key: string}) => {
    const currentLanguage = localStorage.getItem('language')
    if (key === '3' || key === '6' || key === '7' || key === '8') return 

    if (key === '4') {
      if (currentLanguage === 'en') return
      setLanguage('en')
      localStorage.setItem('language', 'en');
      setLoading(true)
      return
    } 
    
    if (key === '5') {
      if (currentLanguage === 'pt-BR') return

      setLanguage('pt-BR')
      localStorage.setItem('language', 'pt-BR');
      setLoading(true)
      return
    } 

    setLoading(true)
    notification.destroy()
    setShowPage(Number(key))
    setCurrentKey(key)
  }

  useEffect(()=> {
    const time = setTimeout(() => {
      setLoading(false)
    }, 500)

    return ()=> {
      clearTimeout(time)
    }

  }, [showPage, language, loading])

  return (
    <Container>
      <Head>
          <title>{translate("Home | Matheus Felizardo - Front-end developer")}</title>
      </Head>
      <Layout>
        <Sider
          collapsible 
          collapsed={collapsed} 
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="vertical"
            theme="dark"
            items={items}
            onSelect={changePage}
            selectedKeys={[currentKey]}
          />
        </Sider>
        <Layout>
          <Content>
            {loading ? 
                <Loading>
                  <Spin indicator={<LoadingOutlined />} />
                </Loading>
                :
                pages[showPage]
              }
          </Content>
        </Layout>
      </Layout>
    </Container>

  )
}

export default Main

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  
`

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
