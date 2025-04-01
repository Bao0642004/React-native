import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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
});

export default Styles;