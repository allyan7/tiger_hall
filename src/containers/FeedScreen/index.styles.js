import { StyleSheet } from "react-native";
import Colors from "../../Theme/Colors";

export const styles = StyleSheet.create({
    mainContainer: { backgroundColor: '#001315', flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
    mediumWhiteText: { fontSize: 16, color: Colors.white },
    textInputView: { backgroundColor: Colors.tigerHallTeal, height: 35, borderRadius: 5, marginVertical:10 },
    textInput: { marginHorizontal: 5, color: Colors.white },
    whiteColorText: { color: Colors.white },
    notFoundImage: { width: '100%', resizeMode: 'contain' }

})