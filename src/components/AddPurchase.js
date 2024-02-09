import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const AddPurchase = ({
  product,
  onHandlerProduct,
  quantity,
  onHandlerQuantity,
  type,
  onHandlerType,
  price,
  onHandlerPrice,
  addPurchase,
}) => {
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Ingresar producto"
        style={styles.input}
        value={product}
        onChangeText={onHandlerProduct}
      ></TextInput>

      <View style={styles.headerQuantitySection}>
        <TextInput
          placeholder="Ingresar cantidad"
          style={styles.input}
          value={quantity}
          onChangeText={onHandlerQuantity}
        ></TextInput>
        <TextInput
          placeholder="Unidad de medida (kg,lt,unidad)"
          style={styles.input}
          value={type}
          onChangeText={onHandlerType}
        ></TextInput>
      </View>

      <TextInput
        placeholder="Ingresar precio por unidad/kg/lt"
        style={styles.input}
        value={price}
        onChangeText={onHandlerPrice}
      ></TextInput>
      <Button
        title="Agregar"
        color={"#61210F"}
        style={styles.button}
        onPress={addPurchase}
      />
    </View>
  );
};

export default AddPurchase;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginVertical: "3%",
    padding: "3%",
    justifyContent: "space-around",
    backgroundColor: "#FF9B85",
    borderRadius: 8,
  },
  headerQuantitySection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#61210F",
  },
});
