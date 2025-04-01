import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        gap:15,
        marginBottom: 20,
    },
    Sanpham:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#495057',
        borderRadius:10,
        height:100,
        padding:10,
        gap:15,
        marginBottom: 20,
    },
    Soluong:{
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        flex:0.25,
    },
    info:{
        flex:0.85,
        gap:10,
    },
    Texttenthuoc:{
        fontSize:18,
        fontWeight:'600',      
    },
    Textgia:{
        fontSize:16,
        left:100,
        color:'#37b24d',
    },
    phuongthuc:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#495057',
        borderRadius:10,
        height:50,
        padding:10,
        gap:15,
        marginBottom: 20,
        alignItems:'center',
    },
    Textphuongthuc:{
        fontSize:14,
        fontWeight:'200',
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
        fontWeight:'500',
        color:'#ffffff',
    },
    containers:{
      gap:30,
      marginBottom: 10,
    },
    cartbuttom:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        left:10,
        position: 'static',
        bottom:10,
    },
});

export default Styles;