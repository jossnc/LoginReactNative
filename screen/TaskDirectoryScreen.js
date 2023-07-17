import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const TaskDirectoryScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <ImageBackground
    source={require('../assets/Fondo.jpg')} // Ruta de tu imagen de fondo
    style={styles.container}
  >
    <View style={styles.container}>
      <Text style={styles.heading}>Task Directory</Text>

      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Enter task"
      />

      <Button title="Add Task" onPress={addTask} style={styles.button} color='#3FA763' />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  taskItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    
  },
});

export default TaskDirectoryScreen;
