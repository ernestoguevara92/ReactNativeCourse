import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput() {
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