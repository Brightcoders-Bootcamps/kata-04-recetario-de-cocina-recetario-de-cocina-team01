import React from 'react';
import { View, Text, Image } from 'react-native'
import { ListItem, Button } from 'react-native-elements'

const CardM = (props) => {

    const users = [
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: '2',
            avatar: '/images/moles.jpeg'
        },
        {
            name: '3',
            avatar: '/images/verdes.jpg'
        },
        {
            name: '4',
            avatar: '/images/discada.jpg'
        },
    ]

    return (
        // implemented without image without header, using ListItem component
        <View>
            {
                users.map((u, i) => {
                    return (
                        <ListItem
                            key={i}
                            roundAvatar
                            title={u.name}
                            leftAvatar={{ source: { uri: u.avatar } }}
                        />
                    );
                })
            }
        </View>
    )
}

export default CardM;