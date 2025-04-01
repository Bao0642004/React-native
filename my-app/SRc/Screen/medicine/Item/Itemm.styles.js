import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#495057',
        borderRadius:10,
        height:100,
        padding:10,
        gap:15,
        marginBottom: 20,
    },
    
    image:{
        flex:1,
        borderRadius:5,
        height:50,
    },

    infobox:{
        flex:3,
        gap:5,
    },
    productname:{
        fontSize:20,
        fontWeight:'600',
        color:'#343a40'
    },
    productprice:{
        fontSize:14,
        fontWeight:'500',
        color:'#37b24d'
    },
    cartbuttom:{
        flex:0.75,
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#3355ff',
        justifyContent:'center',
        alignItems:'center',
        
    }
});
export default Styles;