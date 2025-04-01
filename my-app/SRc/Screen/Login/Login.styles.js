import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containaer:{
        flex: 1,
        padding:20,
      
    },
    InPut:{
        fontSize:16,
        height:50,
        marginBottom:25,
        borderBottomColor: '#868e96',
        borderBottomWidth: 1,
        
    },
    title: {
        fontSize:24,
        color:'#495057',
        fontWeight:'600',
        marginBottom:20,
    },
    closebutton:{
        alignItems: 'center',
        justifyContent:'center',
        borderColor:'#adb5bd',
        paddingVertical: 12,
        borderRadius:30,
    },
    closeText:{
        color:'#495057',
        fontSize:13,
        fontWeight:'600',
    },
    savebutton:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#1c6ede',
        paddingVertical: 12,
        borderRadius:30,
        marginBottom:8,
    },
    savebuttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
    },
    Text1:{
        fontSize:14,
        fontWeight:'500',
        marginBottom:10,
    },
    text2: {
        fontSize:14,
        fontWeight:'500',
        marginBottom:10,
        color:'#1c6ede',
    },
    containaer2: {
        flexDirection:'row',
        gap:10,
        left:50,
    },
});

export default styles;