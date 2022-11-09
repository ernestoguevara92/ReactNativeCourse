import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { NativeBaseProvider, Box, Radio } from 'native-base';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredPriority, setEnteredPriority] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="fade" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    placeholder='Input your goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}
                />
                <TextInput
                    placeholder='Input Date!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} 
                    value={enteredDate} 
                />
                <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                    setValue(nextValue);
                    }}>
                    <Radio value="one" my={1}>
                        One
                    </Radio>
                    <Radio value="two" my={1}>
                        Two
                    </Radio>
                    </Radio.Group>;
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