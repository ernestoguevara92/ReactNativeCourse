import { useState } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {
        text: enteredGoal,
        id: Math.random().toString()
      }
    ]);
  }

  return (
    <View style={styles.appContainer}>
     
     <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 6,
  }
});
