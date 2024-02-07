import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";
import { Modal } from "react-native-web";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idSelected, setIdSelected] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [newPurchase, setNewPurchase] = useState({
    id: "",
    product: "",
    quantity: "",
    type: "",
    price: "",
  });

  const addPurchase = () => {
    setCheckList([...checkList, newPurchase]);
    setNewPurchase({ id: "", product: "", quantity: "", type: "", price: "" });
  };
  const onHandlerProduct = (p) => {
    setNewPurchase({ ...newPurchase, product: p, id: uuid.v4() });
  };
  const onHandlerQuantity = (q) => {
    setNewPurchase({ ...newPurchase, quantity: q });
  };
  const onHandlerType = (t) => {
    setNewPurchase({ ...newPurchase, type: t });
  };
  const onHandlerPrice = (p) => {
    setNewPurchase({ ...newPurchase, price: p });
  };

  const onHandlerModal = (id) => {
    setIdSelected(id);
    setModalVisible(true);
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
          value={newPurchase.product}
        ></TextInput>

        <View style={styles.headerQuantitySection}>
          <TextInput
            placeholder="Ingresar cantidad"
            style={styles.input}
            onChangeText={onHandlerQuantity}
            value={newPurchase.quantity}
          ></TextInput>
          <TextInput
            placeholder="Unidad de medida (kg,lt,unidad)"
            style={styles.input}
            onChangeText={onHandlerType}
            value={newPurchase.type}
          ></TextInput>
        </View>

        <TextInput
          placeholder="Ingresar precio por unidad/kg/lt"
          style={styles.input}
          onChangeText={onHandlerPrice}
          value={newPurchase.price}
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

      <Modal visible={modalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text>¿Estas seguro de eliminar este recado?</Text>
          <View style={styles.cardActions}>
            <Button
              title="Si"
              onPress={() => {
                console.log("eliminado");
                deletePurchase(idSelected);
                setModalVisible(false);
              }}
              color={"#ff9b85"}
            />
            <Button
              title="No"
              onPress={() => setModalVisible(false)}
              color={"#ff9b85"}
            />
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
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
