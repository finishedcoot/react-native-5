import { Text, View, StyleSheet, FlatList } from "react-native";
import { GlobalStyle } from "../../constants/style";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expansesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expansesSum.toFixed(2)}</Text>
    </View>
  );
};
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: GlobalStyle.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    color: GlobalStyle.primary400,
    fontWeight: "bold",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyle.colors.primary500,
  },
});
