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
        flex:1.2,
        aspectRatio:1,
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
        fontSize:18,
        fontWeight:'500',
        color:'#37b24d',
        left:80,
    },
    cartbuttom:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#3355ff',
        justifyContent:'center',
        alignItems:'center',
    },
    soluong:{
        flexDirection:'row',
        flex:0.25,
        gap:5,
        right:25,
        justifyContent:'center',
        alignItems:'center',
    },
    Textsoluong:{
        fontSize:16,
        fontWeight:'500',
        color:'#343a40',
    },
});

export default Styles;