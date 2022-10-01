import { StyleSheet } from "react-native";
import Colors from "../../Theme/Colors";

export const styles = StyleSheet.create({
    mainContainer: { backgroundColor: Colors.white, borderRadius: 7, marginTop: 10 },
    image: { resizeMode: 'cover', height: 200, width: '100%', borderTopLeftRadius: 7, borderTopRightRadius: 7 },
    textBody: { padding: 10 },
    cardTitle: { color:Colors.tigerHallOrange, fontWeight: 'bold', },
    cardSubheading:{ color: 'black', fontWeight: 'bold', fontSize: 16 }
})