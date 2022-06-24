import { Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyle } from "../../constants/style";
import { getFormatedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpensItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={(pressed) => {
        pressed && styles.pressed;
      }}
    >
      <View style={styles.expesnItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expesnItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyle.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    elevation: 3,
    shadowColor: GlobalStyle.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyle.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    padding: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyle.colors.primary500,
    fontWeight: "bold",
  },
});
