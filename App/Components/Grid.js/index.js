import React from 'react';
import { View } from 'react-native';
import styles from './style';

export const Row = props => {
    let style = { ...styles.row, ...props.style };
    if(props.align) {
        let _align = props.align;
        if(props.align == 'right') _align = "flex-end";
        if(props.align == 'left') _align = "flex-start";
        Object.assign(style, { display: 'flex', flexDirection: 'row', justifyContent: _align });
    }

    return (<View { ...props } style={ style } />);
};

export const Col = props => {
    let _props = { ...props };
    delete _props.flex;
    delete _props.align;
    delete _props.valign;
    delete _props.style;

    let style = { ...styles.col, ...props.style };
    if(props.flex == 'auto') Object.assign(style, { flexGrow: 1, flexShrink: 1, flexBasis: `${props.flex}` });
    if(props.flex && props.flex != 'auto') Object.assign(style, { flexGrow: 0, flexShrink: 0, flexBasis: props.flex });
    if(props.valign) {
        let _valign = props.valign;
        if(props.valign == 'bottom') _valign = "flex-end";
        if(props.valign == 'top') _valign = "flex-start";
        if(props.valign == 'middle') _valign = "center";
        Object.assign(style, { display: 'flex', flexDirection: 'row', alignItems: _valign });
    }
    if(props.align) {
        let _align = props.align;
        if(props.align == 'right') _align = "flex-end";
        if(props.align == 'left') _align = "flex-start";
        Object.assign(style, { display: 'flex', flexDirection: 'row', justifyContent: _align });
    }

    return (<View { ..._props } style={ style } />);
};
