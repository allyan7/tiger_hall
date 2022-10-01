import { Image, Text, View } from "react-native"
import Colors from "../../Theme/Colors"
import { styles } from "./index.styles"


export const renderCards = (card) => {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.image} source={{ uri: `${card.item.image.uri}` }} />
            <View style={styles.textBody}>
                <Text style={styles.cardTitle}>{card.item.experts[0].firstName} {card.item.experts[0].firstName}</Text>
                <Text style={styles.cardSubheading}>{card.item.experts[0].title.toUpperCase()}</Text>
                <Text>{card.item.experts[0].company} </Text>
                <Text>{card.item.categories[0].name.toUpperCase()}</Text>
                <Text style={{ color: Colors.tigerHallOrange }}>{card.item.name}</Text>
            </View>
        </View>
    )
}

