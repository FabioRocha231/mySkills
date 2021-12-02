import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './src/components/Button/styles';


function Button({onPress}) {
    return(
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={.7}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

export { Button }