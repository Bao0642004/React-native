import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:20,
    },
    combo:{
        flex:2,
        fontSize:16,
        backgroundColor: '#a6acaf',
        height:30,
        gap:30,
        alignContent: 'center',
        justifyContent: 'center',
    },
    input:{
        flex:3,
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:'#868e96',
    },
    container1:{
        flexDirection:'row',
        borderColor:'#495057',
        borderRadius:10,
        height:50,
        padding:10,
        gap:15,
        marginBottom: 20,
    },
    cartbuttom:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        left: 300,
    },
});
export default styles;