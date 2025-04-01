import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
   
    container:{
        flexDirection: 'column',
        borderWidth:1,
        borderColor:'#495057',
        borderRadius:10,
        height:150,
        padding:10,
        gap:15,
        marginBottom: 20,
    },
    View:{
        flexDirection: 'row',
    },
    Text1:{
        fontSize:18,
        fontWeight:'600',
    },
    Text2:{
        fontSize:16,
        fontWeight:'400',
    }
});

export default Styles;