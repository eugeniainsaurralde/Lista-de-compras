import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Ingresar producto"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingresar cantidad"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingresar precio por unidad"
          style={styles.input}
        ></TextInput>
        <Button title="ADD" color={"#61210F"} style={styles.button} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>LECHE</Text>
            <Text>Comprar 1 caja</Text>
            <Text>Va a costar $800</Text>
          </View>
          <View style={styles.cardActions}>
            <Button title="Borrar" color={"#ff9b85"} />
            <Button title="Chek" color={"#ff9b85"} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>LECHE</Text>
            <Text>Comprar 1 caja</Text>
            <Text>Va a costar $800</Text>
          </View>
          <View style={styles.cardActions}>
            <Button title="Borrar" color={"#ff9b85"} />
            <Button title="Chek" color={"#ff9b85"} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>LECHE</Text>
            <Text>Comprar 1 caja</Text>
            <Text>Va a costar $800</Text>
          </View>
          <View style={styles.cardActions}>
            <Button title="Borrar" color={"#ff9b85"} />
            <Button title="Chek" color={"#ff9b85"} />
          </View>
        </View>
      </View>
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
  cardContent: {
    color: "#FFFFFF",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
