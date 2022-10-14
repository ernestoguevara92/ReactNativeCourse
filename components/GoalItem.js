import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{props.text}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
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