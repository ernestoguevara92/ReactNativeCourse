import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

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
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                />
                <View  style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button 
                            title='ADD GOAL'
                            onPress={addGoalHandler}
                            color="#5e0acc"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' 
                            onPress={props.onCancel}
                            color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#91cd9c',
      },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fffaff',
        color: '#120438',
        fontSize: 18,
        width: '90%',
        padding: 16,
      },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
});