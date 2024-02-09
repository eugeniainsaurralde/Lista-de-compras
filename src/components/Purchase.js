import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";

const Purchase = ({ checkList, onHandlerModal }) => {
  return (
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
  );
};

export default Purchase;

const styles = StyleSheet.create({
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
});
