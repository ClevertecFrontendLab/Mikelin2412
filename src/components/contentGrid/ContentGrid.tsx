import React, {useState, useEffect} from 'react';
import classes from './ContentGrid.module.css';
import { Button, Card, Col, Row, Typography } from 'antd';
import { CalendarOutlined, HeartFilled, HeartOutlined, IdcardOutlined, CalendarTwoTone } from '@ant-design/icons';

const { Text, Title } = Typography;

interface IContentGrid {
    isOpen: boolean;
}

const ContentGrid = ({isOpen}: IContentGrid) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [gutterOfColumns, setGutterOfColumns] = useState(8);
    const [paddingOfButtons, setPaddingOfButtons] = useState(12);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth < 834) {
            setGutterOfColumns(24);
            setPaddingOfButtons(10);
        } else {
            setGutterOfColumns(8);
            setPaddingOfButtons(12);
        }
      };

      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className={classes.contentGridContainer}>
            <div className={classes.firstGridContainer}>
                {
                    windowWidth < 834 ? (
                        <Text className={classes.text} style={{color: '#061178'}}>С CleverFit ты сможешь:<br/> — планировать свои тренировки<br/> на календаре, выбирая тип<br/> и уровень нагрузки;<br/> — отслеживать свои достижения<br/> в разделе статистики, сравнивая свои результаты с нормами<br/> и рекордами;<br/> — создавать свой профиль, где<br/> ты можешь загружать свои фото, видео и отзывы о тренировках;<br/> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям<br/> и советам профессиональных тренеров.</Text>
                    ) : windowWidth >= 834 && windowWidth < 1440 && isOpen ? (
                        <Text className={classes.text} style={{color: '#061178'}}>С CleverFit ты сможешь:<br/> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br/> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;<br/> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы<br/> о тренировках;<br/> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</Text>
                    ) : windowWidth >= 834 && windowWidth < 1440 && !isOpen ? (
                        <Text className={classes.text} style={{color: '#061178'}}>С CleverFit ты сможешь:<br/> — планировать свои тренировки на календаре, выбирая тип<br/> и уровень нагрузки;<br/> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;<br/> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;<br/> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</Text>
                    ) : (
                        <Text className={classes.text} style={{color: '#061178'}}>С CleverFit ты сможешь:<br/> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br/> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты<br/> с нормами и рекордами;<br/> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы<br/> о тренировках;<br/> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</Text>
                    )
                }
            </div>
            <div className={classes.secondGridContainer}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        {
                            windowWidth < 834 ? (
                            <Title level={4} className={classes.mainCardTitle}>
                                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </Title>
                            ) : windowWidth >= 834 && windowWidth < 1440 && isOpen ? (
                            <Title level={4} className={classes.mainCardTitle}>
                                CleverFit — это не просто приложение, а твой личный помощник<br/> в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </Title>
                            ) : windowWidth >= 834 && windowWidth < 1440 && !isOpen ? (
                            <Title level={4} className={classes.mainCardTitle}>
                                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                            </Title>
                            ) : (
                            <Title level={4} className={classes.mainCardTitle}>
                                CleverFit — это не просто приложение, а твой личный помощник<br/> в мире фитнеса. Не откладывай на завтра — начни тренироваться<br/> уже сегодня!
                            </Title>
                            )
                        }
                    </Col>
                    <Col span={gutterOfColumns} style={{marginBottom: '-8px'}}>
                        <Card
                            title="Расписать тренировки" 
                            bordered={false}
                            headStyle={{padding: '12px 24px'}}
                            bodyStyle={{
                                padding: `${paddingOfButtons}px 0`,
                                display: 'flex',
                                justifyContent: 'center'
                                }}>
                            <Button type='link' icon={<HeartFilled />} style={{color: '#2F54EB'}}>Тренировки</Button>
                        </Card>
                    </Col>
                    <Col span={gutterOfColumns} style={{marginBottom: '-8px'}}>
                        <Card
                            className={classes.cards}
                            title="Назначить календарь"
                            bordered={false}
                            headStyle={{padding: '12px 24px'}}
                            bodyStyle={{
                                padding: `${paddingOfButtons}px 0`,
                                display: 'flex',
                                justifyContent: 'center'
                                }}>
                            <Button type='link' style={{color: '#2F54EB'}} icon={<CalendarTwoTone twoToneColor={['##2F54EB', '##2F54EB']}/>}>Календарь</Button>
                        </Card>
                    </Col>
                    <Col span={gutterOfColumns}>
                        <Card
                            className={classes.cards}
                            title="Заполнить профиль"
                            bordered={false}
                            headStyle={{padding: '12px 24px'}}
                            bodyStyle={{
                                padding: '12px 0',
                                display: 'flex',
                                justifyContent: 'center'
                                }}>
                            <Button type='link' style={{color: '#2F54EB'}} icon={<img className={classes.lightProfileIcon} src='../../../public/lightIcon.svg' alt='logo' />}>Профиль</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContentGrid;
