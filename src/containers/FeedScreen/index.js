import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { ContentAPI } from '../../services/ContentAPI'

const FeedScreen = () => {
    useEffect(() => {
        ContentAPI("").then(data => {
            console.log('data from graphQL endpoint', data)
        }
        )
    }, [])
    return (
        <Text>This is feeds screen</Text>
    )
}

export default FeedScreen