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