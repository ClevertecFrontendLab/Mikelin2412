import React from 'react';
import classes from './ExitButton.module.css';
import { Divider } from 'antd';
import exitIcon from '../../../public/Exit.svg';

interface IExitButton {
    isOpen: boolean;
}

const ExitButton = ({ isOpen }: IExitButton) => {
    return (
        <div className={`${classes.exitButtonContainer} ${!isOpen && window.innerWidth < 834 ? classes.open : undefined}`}>
            <Divider className={classes.divider}/>
            <button className={classes.exitButton}>
                <img className={classes.exitIcon} src={exitIcon} alt='exitIcon' />
                <span className={!isOpen ? classes.open : undefined}>Выход</span>
            </button>
        </div>
    );
};

export default ExitButton;
