import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '@rneui/themed';

export default function App() {

  const listProducts = ["Americano", "Café com leite"]


  const Products = () => {
    listProducts.map((i) => {
      return(
        <Product nome="Oi"/>
      )
    })
  }



  const Product = (props) => {
        <View>
          <Text>{props.nome}</Text>
          <Text>Estado</Text>
          <View style={{flex: 1, flexDirection: "row",  justifyContent: "space-between"}}>
            <Button size="sm">P</Button>
            <Button size="sm">M</Button>
            <Button size="sm">G</Button>
          </View>
        </View>
  }

  return (
    <View style={styles.container}>
      <Text>Coffee</Text>
      <Products/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
