import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar
} from 'react-native';
import { Button } from '../../components/Button/Index';
import { SkillCard } from '../../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkilss, setMySkills ] = useState<SkillData[]>([]);
  const [greetings, setGrettings] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getMilliseconds()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);

  }

  function handleRemoveSKill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    currentHour <= 12 ? setGrettings('Good Morning') : setGrettings('Good Afternoon');
    currentHour >= 18 ? setGrettings('Good Night') : null;
    
  }, [greetings])

  return (
    
      <View style={styles.container}>
        
        <Text style={styles.title}>Welcome Fabio</Text>

        <Text style={styles.greetings}>
          {greetings}
        </Text>

        <TextInput 
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#444"
          onChangeText={setNewSkill}
        />
        
        <Button 
          onPress={handleAddNewSkill}
          title="Add"
        />

        <Text style={[styles.title, {marginVertical: 20}]}>
          My Skills
        </Text>

        <FlatList 
          data={mySkilss}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <SkillCard 
              skill={item.name}
              onPress={() => handleRemoveSKill(item.id)}
            />
          )}
        />
          
        
      </View>
      
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e29',
    color: '#fff',
    borderRadius: 10,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  greetings: {
    color: '#fff'
  }
  
})

export { Home }