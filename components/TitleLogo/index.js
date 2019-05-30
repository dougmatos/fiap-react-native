import React, {PureComponent} from 'react';
import {Image, Platform} from 'react-native';
import Logo from '../../assets/logo.png'

export default class TitleLogo extends React.Component{

        render(){
            const style = Platform.OS == 'ios' ?
                { width: 111, height: 120, marginTop: 40 } : 
                { width: 111, height: 120, marginTop: 40, position: 'absolute', left: '50%', marginLeft: -55 };

            return (
                <Image style={ style } source ={ Logo } />
            );
        }
}

