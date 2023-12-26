import React, { useState } from "react";
import {View, Text, TextInput,Button, StyleSheet,FlatList, Alert, TouchableOpacity,Modal,} from "react-native";

export default function App() {
  const [codigo, setCodigo] = useState("");
  const [producto, setProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [productos, setProductos] = useState([]);
  const [editarIndice, setEditarIndice] = useState(-1);
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const agregarProducto = () => {
    const repetido = productos.some((producto) => producto.codigo === codigo);
    if (repetido) {
      Alert.alert("Error", "El código del producto ya está en uso");
      return;
    }

    const precioVenta = parseFloat(precioCompra) * 1.2;
    const nuevoProducto = {
      codigo,
      producto,
      categoria,
      precioCompra,
      precioVenta,
    };

    setProductos([...productos, nuevoProducto]);
    setCodigo("");
    setProducto("");
    setCategoria("");
    setPrecioCompra("");
    setCantidadProductos(cantidadProductos + 1);
  };

  const editarProducto = (indice) => {
    const productoEditado = productos[indice];
    setCodigo(productoEditado.codigo);
    setProducto(productoEditado.producto);
    setCategoria(productoEditado.categoria);
    setPrecioCompra(productoEditado.precioCompra);
    setEditarIndice(indice);
  };

  const eliminarProducto = (indice) => {
    setProductoAEliminar(productos[indice]);
    setModalVisible(true);
  };

  const confirmarEliminar = () => {
    const nuevosProductos = productos.filter(
      (producto) => producto.codigo !== productoAEliminar.codigo
    );
    setProductos(nuevosProductos);
    setCantidadProductos(cantidadProductos - 1);
    setModalVisible(false);
    setProductoAEliminar(null);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setProductoAEliminar(null);
  };

  const guardarEdicion = () => {
    const repetido = productos.some(
      (producto, index) => index !== editarIndice && producto.codigo === codigo
    );
    if (repetido) {
      Alert.alert("Error", "El código del producto ya está en uso");
      return;
    }

    const precioVenta = parseFloat(precioCompra) * 1.2;
    const productoEditado = {
      codigo,
      producto,
      categoria,
      precioCompra,
      precioVenta,
    };

    const nuevosProductos = [...productos];
    nuevosProductos[editarIndice] = productoEditado;

    setProductos(nuevosProductos);
    setCodigo("");
    setProducto("");
    setCategoria("");
    setPrecioCompra("");
    setEditarIndice(-1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingreso de productos</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Producto"
        value={producto}
        onChangeText={setProducto}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio de compra"
        value={precioCompra}
        onChangeText={setPrecioCompra}
        keyboardType="numeric"
      />

      {editarIndice === -1 ? (
        <Button title="Agregar" onPress={agregarProducto} />
      ) : (
        <View style={styles.botones}>
          <Button title="Guardar" onPress={guardarEdicion} />
          <Button
            title="Cancelar"
            onPress={() => {
              setCodigo("");
              setProducto("");
              setCategoria("");
              setPrecioCompra("");
              setEditarIndice(-1);
            }}
          />
        </View>
      )}

      <Text style={styles.subtitle}>{`Lista de productos (${cantidadProductos})`}</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => editarProducto(index)}>
            <View style={styles.productoContainer}>
              <Text style={styles.productoText}>{item.producto}</Text>
              <Text>{`Código: ${item.codigo}`}</Text>
              <Text>{`Categoría: ${item.categoria}`}</Text>
              <Text>{`Precio de compra: $${item.precioCompra}`}</Text>
              <Text>{`Precio de venta: $${item.precioVenta.toFixed(2)}`}</Text>

              <View style={styles.botones}>
                <Button title="Eliminar" onPress={() => eliminarProducto(index)} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Está seguro que quiere eliminar?</Text>
            <View style={styles.modalBotones}>
              <Button title="Aceptar" onPress={confirmarEliminar} />
              <Button title="Cancelar" onPress={cerrarModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  productoContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  productoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});