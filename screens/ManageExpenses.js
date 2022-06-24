import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { GlobalStyle } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverLay from "../UI/ErrorOverLay";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";

const ManageExpenses = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  const [isUpdating, setIsupdating] = useState(false);
  const [error, setError] = useState();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expens) => expens.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    try {
      setIsupdating(true);
      expensesCtx.deleteExpense(editedExpenseId);
      await deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("oops, Something went wrong!");
    }

    setIsupdating(false);
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expensData) => {
    setIsupdating(true);

    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expensData);
        await updateExpense(editedExpenseId, expensData);
      } else {
        const id = await storeExpense(expensData);
        expensesCtx.addExpense({ ...expensData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not Update at this moment");
      setIsupdating(false);
    }
  };

  function errorHandler() {
    setError(null);
  }

  if (error && !isUpdating) {
    return <ErrorOverLay message={error} onComfirm={errorHandler} />;
  }

  if (isUpdating) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValue={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyle.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyle.colors.primary200,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
