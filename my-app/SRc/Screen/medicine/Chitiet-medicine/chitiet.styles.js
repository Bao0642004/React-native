import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        borderColor:'#495057',
        borderRadius:10,
        height:1000,
        padding:10,
        gap:15,
        marginBottom: 20,
    },
    image:{
        height:250,
        borderRadius:5,
    },
    
    infobox:{
        gap:5,
    },
    productname:{
        fontSize:30,
        fontWeight:'600',
        color:'#3355ff',
        marginBottom:5,
    },
    productprice:{
        fontSize:14,
        fontWeight:'600',
        color:'#37b24d'
    },
    Mota:{
        fontSize:14,
        fontWeight:'500',
        color:'#37b24d'
    },
   Them:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FF922B',
    paddingVertical: 12,
    borderRadius:30,
    marginBottom:8,
    
   } 
});

export default styles;