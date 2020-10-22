import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" 
    type="primary"/>) 

    const style = {
        backgroundColor: '#0069D9',
        color: 'white',
        borderRadius: '2px',
        padding: '5px 25px',
        border: '#0069D9'
    }

    const danger = {
        backgroundColor: '#D72E3C',
        color: 'white',
        borderRadius: '2px',
        padding: '5px 25px',
        border: '#0069D9'
    }
    
    const success = {
        backgroundColor: '#53A451',
        color: 'white',
        borderRadius: '2px',
        padding: '5px 25px',
        border: '#0069D9'
    }
    const warning = {
        backgroundColor: '#F6C344',
        color: 'white',
        borderRadius: '2px',
        padding: '5px 25px',
        border: '#0069D9'
    }
    storiesOf('Button', module)
        .add('Primary', () => <Button
            label="Primary"
            style={style} />)
        .add('Danger', () => <Button
            label="Danger"
            style={danger}
        />)
        .add('Success', () => <Button
        label="Success"
        style={success}
    />)
    .add('Warning', () => <Button
        label="Warning"
        style={warning}
    />)
    .add('Large Primary', () => <Button
    label="Large Primary Button"
    type="primary"
    large
/>)