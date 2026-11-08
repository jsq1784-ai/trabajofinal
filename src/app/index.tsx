 import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
 const index = () => {
   return (
     <View style={styles.container}>
       <Text style={styles.titulo}>sayajin de la tierra</Text>
       <Text style={styles.parrafo}>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at sapiente, velit laudantium cupiditate ea aspernatur labore vitae hic autem minus, quas voluptas aliquam. Cupiditate perspiciatis consequuntur magni fugit libero?
       </Text>
       <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/logo.jpg')} style={{width: 300, height: 200}}></Image>
      <TouchableOpacity style={styles.boton} onPress={()=>router.push('/contactos')}>
       <Text style={{textAlign: 'center', color: 'white'}}>Click Aqui</Text>
       </TouchableOpacity>
       </View>
       <Text style={styles.parrafo}>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at sapiente, velit laudantium cupiditate ea aspernatur labore vitae hic autem minus, quas voluptas aliquam. Cupiditate perspiciatis consequuntur magni fugit libero?
       </Text>
     </View>
   )
 }
 
 export default index
 
 const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 20,
    },
    titulo:{
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 10,
    },
    parrafo:{
      fontSize: 14,
      lineHeight: 30,
    },
    boton:{
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    }
 })