import React from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

interface ITriggerIcon {
    collapsed: boolean;
    onClick: () => void;
    'data-test-id' : string;
}

const TriggerIcon = ({ collapsed, onClick, 'data-test-id': dataTestId }: ITriggerIcon) => {
    const IconComponent = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  
    return (
      <IconComponent className="trigger" onClick={onClick} data-test-id={dataTestId} />
    );
  };

export default TriggerIcon
