  import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 
 const index = () => {
   return (
     <ScrollView> 
     <View style={styles.container}>
       <Text style={styles.titulo}>Nosotros</Text>
       <Text style={styles.parrafo}>lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at sapiente, velit laudantium cupiditate ea aspernatur labore vitae hic autem minus, quas voluptas aliquam. Cupiditate perspiciatis consequuntur magni fugit libero?
       </Text>
       <View style={{ alignItems: 'center' }}>
      <Image source={require('../../assets/images/icon.png')} style={{width: 300, height: 200}}></Image>
      <TouchableOpacity style={styles.boton}>
       <Text style={{textAlign: 'center', color: 'white'}}>Click Aqui</Text>
       </TouchableOpacity>
       </View>
       <Text style={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ratione eaque natus iure ducimus laudantium molestias facilis tempore, quam beatae deserunt nam? Quam magni vitae ratione ullam obcaecati, et ducimus.
       Ad provident, velit ex dolore laborum autem consequatur nesciunt blanditiis nulla eius reiciendis perspiciatis veritatis pariatur nihil placeat molestiae mollitia praesentium tenetur modi deserunt. Nam et sit consequatur hic temporibus!
       Eveniet deleniti, ex laborum quod ipsa, eos ab earum asperiores, corporis quibusdam libero cum! Amet maxime quo eius voluptate qui asperiores totam consequatur. Modi, dignissimos aliquid nulla quam perspiciatis repellat.</Text>
     </View>
     </ScrollView>
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