import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      enteredGoal
    ]);
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Your course goal!' 
        style={styles.textInput} 
        onChangeText={goalInputHandler} 
      />
      <Button 
        title='ADD GOAL'
        onPress={addGoalHandler}
      />
     </View>
     <View style={styles.goalsContainer}>
      <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalItemText}>{goal}</Text>
          </View>
          ))}
      </ScrollView>
     </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    margin: 3,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e00c4'
  },
  goalItemText: {
    color: '#fff',
    fontSize: 16
  }
});
