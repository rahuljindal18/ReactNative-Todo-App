import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from "react-native";

const list = [
  {
    userId: 1,
    id: "1",
    title: "delectus ",
    completed: false,
  },
  {
    userId: 1,
    id: "2",
    title: "quis ",
    completed: false,
  },
  {
    userId: 1,
    id: "3",
    title: "fugiat ",
    completed: false,
  },
  {
    userId: 1,
    id: "4",
    title: "et ",
    completed: true,
  },
  {
    userId: 1,
    id: "5",
    title: "laboriosam ",
    completed: false,
  },
  {
    userId: 1,
    id: "6",
    title: "qui ",
    completed: false,
  },
  {
    userId: 1,
    id: "7",
    title: "illo ",
    completed: false,
  },
];

export default function App() {
  // const [name, setName] = useState("RJ");
  // const [age, setAge] = useState(30);
  // const clickHandler = () => {
  //   setName("Rahul Jindal");
  // };
  const [listItems, setListItems] = useState(list);
  const pressHandler = (id) => {
    console.log(id);
    setListItems((prevListItems) => {
      return prevListItems.filter((item) => item.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={listItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {listItems.map((item) => {
          return (
            <View key={item.id}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. JOHN DOE"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 44"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        name : {name}, age : {age}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginTop: 24,
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
