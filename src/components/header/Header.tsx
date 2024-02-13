import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import { Breadcrumb, Button, PageHeader, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <PageHeader className={classes.header}>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={classes.headerTitleContainer}>
                {windowWidth < 834 ? (
                    <>
                        <Typography.Title level={3} className={classes.headerTitle}>
                            Приветствуем тебя<br/> в CleverFit — приложении, которое поможет тебе добиться своей мечты!
                        </Typography.Title>
                        <Button shape="circle">
                            <SettingOutlined />
                        </Button>
                    </>
                ) : windowWidth >= 834 && windowWidth < 1440 ? (
                    <>
                        <Typography.Title level={3} className={classes.headerTitle}>
                            Приветствуем тебя в CleverFit — приложении,
                            <br/> которое поможет тебе добиться своей мечты!
                        </Typography.Title>
                        <Button type='text'>
                            Настройки
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography.Title level={1} className={classes.headerTitle}>
                            Приветствуем тебя в CleverFit — приложении,
                            <br /> которое поможет тебе добиться своей мечты!
                        </Typography.Title>
                        <Button type='text'>
                            <SettingOutlined />
                            Настройки
                        </Button>
                    </>
                )}
            </div>
        </PageHeader>
    );
};

export default Header;
