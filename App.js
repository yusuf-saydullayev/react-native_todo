import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo';


export default function App() {
  const [todos, setTodos] = useState([
    { text: "qweqwe", id: 1 },
    { text: "qd", id: 2 },
    { text: "asd", id: 3 },
    { text: "23r", id: 4 },
    { text: "awdr", id: 5 }
  ])

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id)
    })
  }

  const SubmitHamdler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, id: Math.floor(Math.random() * 100) },
        ...prevTodos
      ]

    })

    Alert.alert('Todo added')

  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo SubmitHamdler={SubmitHamdler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }

});
