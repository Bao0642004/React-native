import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  

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
    Thanhtoan:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#3355ff',
        paddingVertical: 12,
        borderRadius:30,
        marginBottom:8,

    },
    Textthanhtoan:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
    },
    containers:{
      gap:50,
    },
    Text:{
        fontSize:16,
        fontWeight:'600',
        color:'#e74c3c',
        marginLeft:10,
    },
    Thanhtoanview:{
        gap:10,
    },
    Textsotien:{
        fontSize:16,
        fontWeight:'600',
        color:'#343a40',
    },
    Viewtien:{
        flexDirection:'row',
        gap:5,
        left:80,
        justifyContent:'center',
        alignItems:'center',
    }
});
export default Styles;