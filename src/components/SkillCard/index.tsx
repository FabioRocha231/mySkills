import React from "react";

import { TouchableOpacity, TouchableHighlightProps, Text, FlatList, View } from "react-native";

import { styles } from './styles';

interface SkillCardProps extends TouchableHighlightProps {
    skill: string
}

function SkillCard({skill, ...rest} : SkillCardProps) {
    return(
        <View>
            <TouchableOpacity 
                style={styles.buttonSkill}
                {...rest}
            >
                <Text style={styles.textSkill}>
                    {skill}
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}

export { SkillCard }