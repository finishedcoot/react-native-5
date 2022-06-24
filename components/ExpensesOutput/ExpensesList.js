import { Text, View, StyleSheet, FlatList } from "react-native";
import ExpensItem from "./ExpensItem";

const renderExpensItem = (itemData) => {
  return <ExpensItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
