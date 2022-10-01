import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { renderCards } from '../../components/RenderCards';
import { ContentAPI } from '../../services/ContentAPI';
import Colors from '../../Theme/Colors';
import { styles } from './index.styles';

const FeedScreen = () => {
    const [searchData, setSearchData] = useState()
    const [dataLoading, setDataLoading] = useState(false)
    const delayedQuery = useCallback(
        debounce(q => ContentAPI(q).then(data => {
            setSearchData(data)
            setDataLoading(false)
        }
        ), 1500),
        [],
    );

    const handleChange = nextValue => {
        setDataLoading(true)
        delayedQuery(nextValue);
    }

    useEffect(() => {
        setDataLoading(true)
        ContentAPI("").then(data => {
            setSearchData(data)
            setDataLoading(false)
        }
        )

    }, [])
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mediumWhiteText}>Search</Text>
            <View style={styles.textInputView}>
                <TextInput
                    placeholder='Type any Keyword'
                    placeholderTextColor={Colors.white}
                    style={styles.textInput}
                    onChangeText={text => handleChange(text)}
                />
            </View>
            {dataLoading ?
                <>
                    <Text style={styles.whiteColorText}>Loading...</Text>
                    <Image source={require('../../assets/loading.gif')} />
                </>
                :
                searchData?.data?.contentCards?.edges.length == 0 ?
                    <>
                        <Text style={styles.whiteColorText}>No data matches the search term, try searching again</Text>
                        <Image style={styles.notFoundImage} source={require('../../assets/notfound.png')} />
                    </> :
                    <FlatList
                        data={searchData?.data?.contentCards?.edges}
                        renderItem={renderCards}
                        keyExtractor={item => item.id}
                    />
            }
        </View>
    )
}

export default FeedScreen