import { useState } from "react";
import { View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import ModalDeletePurchase from "./src/components/ModalDeletePurchase";
import AddPurchase from "./src/components/AddPurchase";
import Purchase from "./src/components/Purchase";

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
      <AddPurchase
        product={product}
        onHandlerProduct={onHandlerProduct}
        quantity={quantity}
        onHandlerQuantity={onHandlerQuantity}
        type={type}
        onHandlerType={onHandlerType}
        price={price}
        onHandlerPrice={onHandlerPrice}
        addPurchase={addPurchase}
      />

      <Purchase checkList={checkList} onHandlerModal={onHandlerModal} />

      <ModalDeletePurchase
        modalVisible={modalVisible}
        transparent={true}
        deletePurchase={deletePurchase}
        onHandlerModal={onHandlerModal}
        purchaseSelected={purchaseSelected}
      />
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
});
