import React from 'react';
import { TouchableOpacity, TouchableOpacityProps ,Text } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

function Button({title ,...rest}: ButtonProps) {
    return(
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
          {...rest}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export { Button }