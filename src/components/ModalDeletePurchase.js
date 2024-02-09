import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

const ModalDeletePurchase = ({
  modalVisible,
  transparent,
  deletePurchase,
  onHandlerModal,
  purchaseSelected,
}) => {
  return (
    <Modal
      visible={modalVisible}
      transparent={transparent}
      onRequestClose={() => onHandlerModal}
    >
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
  );
};

export default ModalDeletePurchase;

const styles = StyleSheet.create({
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
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "2%",
  },
});
