import React from 'react';
import { View, Text, Image } from 'react-native'
import { ListItem, Button, Icon, Card } from 'react-native-elements'

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: '2',
        avatar: '../images/mole.jpeg'
    },
    {
        name: '3',
        avatar: '../images/verdes.jpg'
    },
    {
        name: '4',
        avatar: '../images/discada.jpg'
    },
]

class CardM extends React.Component {

    render() {
        return (
            // implemented without image without header, using ListItem component
            // implemented without image without header, using ListItem component
            <Card containerStyle={{ padding: 0 }} >
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
            </Card>

            
        )
    }
}

export default CardM;