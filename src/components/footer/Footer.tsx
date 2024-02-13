import React from 'react'
import classes from './Footer.module.css'
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd'

const { Meta } = Card;

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Button type='link' className={classes.reviewsButton} style={{
        fontSize: '16px',
        letterSpacing: '0.45px',
        padding: '9.5px 15px',
        height: 'auto',
        color: '#2F54EB'
      }}>Смотреть отзывы</Button>
      <Card
        bordered={false}
        className={classes.cardContainer}
        actions={[
        <Button type='text' style={{padding: '0'}}><AndroidFilled /> Android OS</Button>,
        <Button type='text' style={{padding: '0'}}><AppleFilled /> Apple iOS</Button>
      ]}>
        <Meta className={classes.metaTitle} title={<Typography.Text>Скачать на телефон</Typography.Text>} description='Доступно в PRO-тарифе' />
      </Card>
    </div>
  )
}

export default Footer