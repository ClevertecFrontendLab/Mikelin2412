import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyOutlined,
    CalendarOutlined,
    HeartOutlined,
    IdcardOutlined,
    CalendarFilled,
    CalendarTwoTone,
    HeartFilled,
    TrophyFilled,
    IdcardTwoTone,
    IdcardFilled
} from '@ant-design/icons';
import { Button, Layout, Menu, Space } from 'antd';
import './main-page.css';
import backgroungImage from '../../../public/background.png'
import Header from '@components/header/Header';
import ContentGrid from '@components/contentGrid/ContentGrid';
import Footer from '@components/footer/Footer';
import ExitButton from '@components/exitButton/ExitButton';
import TriggerIcon from '@components/triggerButton/Trigger';

const { Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState({
        collapsedWidth: 64,
        width: 208,
    });
    const [isSiderOverlay, setIsSiderOverlay] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 834) {
            setCollapsed(true);
            setSiderWidth({
                collapsedWidth: 1,
                width: 106
            });
            setIsSiderOverlay(true);
        } else {
            setSiderWidth({
                collapsedWidth: 64,
                width: 208
            });
            setIsSiderOverlay(false);
        }
      };

      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            <Layout className={`main-page-background ${isSiderOverlay ? 'sider-overlay' : ''}`} style={
                { minHeight: '100vh', backgroundImage: `url(${backgroungImage})`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: '1440px', margin: 'auto' }
                }>
                <Sider
                    trigger={null}
                    theme='light'
                    collapsible
                    collapsed={collapsed}
                    collapsedWidth={siderWidth.collapsedWidth}
                    width={siderWidth.width}>
                    <div className='logo'>
                        {
                            !collapsed ?
                                <img className='open' src='../../../public/Property 1=Default.svg' alt='logo' />
                                :
                                <img src='../../../public/Property 1=image.svg' alt='logo' />
                        }
                    </div>
                    <Menu
                        className='menu-container'
                        theme='light'
                        mode='inline'
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} className='icons-from-menu'/>,
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: <HeartFilled className='icons-from-menu'/>,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled className='icons-from-menu'/>,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: <img className='icons-from-menu' src='../../../public/icon.svg' alt='logo' />,
                                label: 'Профиль',
                            },
                        ]}
                    />
                    {
                        collapsed ?
                            <ExitButton
                                isOpen={false}/>
                            :
                            <ExitButton
                                isOpen={true}/>
                    }
                    <TriggerIcon
                        collapsed={collapsed}
                        onClick={() => setCollapsed(!collapsed)}
                        data-test-id={window.innerWidth < 834 ? "sider-switch-mobile" : "sider-switch"}
                    />
                </Sider>
                <Layout style={{backgroundColor: 'transparent'}}>
                    <Header />
                    <Content className='main-content'>
                        <ContentGrid
                            isOpen={collapsed} />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </>
    );
};
