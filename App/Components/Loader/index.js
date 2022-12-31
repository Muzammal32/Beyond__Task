import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { Colors } from '../../Themes';
import styles from './style';

const Loader = props => {
    const { loading } = props;

    return (
        <Modal
            transparent={ true }
            animationType={ 'none' }
            visible={ loading }
            onRequestClose={ () => { console.log('close modal'); } }>
            <View style={ styles.modalBackground }>
                <View style={ styles.activityIndicatorWrapper }>
                    <ActivityIndicator
                        size="large"
                        color={ Colors.charcoal }
                        animating={ loading } />
                </View>
            </View>
        </Modal>
    );
};



export default Loader;