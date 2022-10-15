import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: 'red'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 3,
        borderRadius: 8,
        backgroundColor: '#5e00c4'
      },
      goalItemText: {
        padding: 8,
        color: '#fff',
        fontSize: 16
      }
});