import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import uuid from "react-native-uuid";

const App = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [checkList, setCheckList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [purchaseSelected, setPurchaseSelected] = useState("");

  const addPurchase = () => {
    const newPurchase = {
      id: uuid.v4(),
      product: product,
      quantity: quantity,
      type: type,
      price: price,
    };
    setCheckList([...checkList, newPurchase]);
    setProduct("");
    setQuantity("");
    setType("");
    setPrice("");
  };
  const onHandlerProduct = (p) => {
    setProduct(p);
  };
  const onHandlerQuantity = (q) => {
    setQuantity(q);
  };
  const onHandlerType = (t) => {
    setType(t);
  };
  const onHandlerPrice = (p) => {
    setPrice(p);
  };

  const onHandlerModal = (id) => {
    setPurchaseSelected(id);
    setModalVisible(!modalVisible);
  };
  const deletePurchase = (id) => {
    setCheckList(checkList.filter((item) => item.id != id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Ingresar producto"
          style={styles.input}
          onChangeText={onHandlerProduct}
          value={product}
        ></TextInput>

        <View style={styles.headerQuantitySection}>
          <TextInput
            placeholder="Ingresar cantidad"
            style={styles.input}
            onChangeText={onHandlerQuantity}
            value={quantity}
          ></TextInput>
          <TextInput
            placeholder="Unidad de medida (kg,lt,unidad)"
            style={styles.input}
            onChangeText={onHandlerType}
            value={type}
          ></TextInput>
        </View>

        <TextInput
          placeholder="Ingresar precio por unidad/kg/lt"
          style={styles.input}
          onChangeText={onHandlerPrice}
          value={price}
        ></TextInput>
        <Button
          title="Agregar"
          color={"#61210F"}
          style={styles.button}
          onPress={addPurchase}
        />
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={checkList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card} key={item.id}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{item.product}</Text>
                <Text style={styles.cardText}>
                  Comprar {item.quantity} {item.type}
                </Text>
                <Text style={styles.cardText}>
                  Va a costar ${item.price * item.quantity} en total
                </Text>
              </View>
              <View style={styles.cardActions}>
                <Button
                  title="Borrar"
                  color={"#ff9b85"}
                  onPress={() => {
                    onHandlerModal(item.id);
                  }}
                />
                <Button title="Chek" color={"#ff9b85"} />
              </View>
            </View>
          )}
        />
      </View>

      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContente}>
            <Text>¿Estas seguro de eliminar este recado?</Text>
            <View style={styles.cardActions}>
              <Button
                title="Si"
                onPress={() => {
                  deletePurchase(purchaseSelected);
                  onHandlerModal();
                }}
                color={"#ff9b85"}
              />
              <Button
                title="No"
                onPress={() => onHandlerModal()}
                color={"#ff9b85"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
    paddingHorizontal: "3%",
    backgroundColor: "#f9edcc",
  },

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

  cardContainer: {
    flex: 3,
  },
  card: {
    marginVertical: "2%",
    padding: "3%",
    backgroundColor: "#61210f",
    borderRadius: 8,
  },
  cardText: {
    padding: "1%",
    color: "#FFFFFF",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "2%",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalContente: {
    padding: "5%",
    borderRadius: 10,
    backgroundColor: "white",
  },
});
