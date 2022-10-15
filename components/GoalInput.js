import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
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
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
      }
});