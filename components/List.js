import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Lovibond',
                adress: '169 Boulevard de la Liberté, 59000 Lille',
                image: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/38843427_699321310403051_3330367617557856256_n.jpg?_nc_cat=103&_nc_ht=scontent-cdg2-1.xx&oh=bb4fae8c3c0bb4e7851a0ea7a38db991&oe=5CAC5D63',
                tel: '03 20 54 33 32'
            },
            {
                id: 1,
                name: 'Le Dracir',
                adress: '12 Rue Léon Trulin, 59000 Lille',
                image: 'https://igx.4sqi.net/img/general/200x200/25417456_ulQrFH90L3u5lmQ14-BFzTMXNTxLXuiakJB82UE7uRQ.jpg',
                tel: '03 20 15 25 88'
            },
            {
                id: 2,
                name: 'Le Velvet',
                adress: '119 Rue Solférino, 59000 Lille',
                image: 'https://lh5.googleusercontent.com/p/AF1QipPgs7pxBlmaXo28Nz-uijoxcsoSX2mnmkgk7iq7=w153-h252-p-k-no',
                tel: 'Non Disponible'
            },

        ]
    }
    alertItemName = (item) => {
        alert('Bar: ' + item.name +'' + '                                         Téléphone: ' + item.tel)
    }
    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemName(item)}>
                            <Image source = {{uri:item.image}}
                                   style = {{ width: 50, height: 50 }}
                            /><Text style = {styles.text}>{item.name}    {item.adress}
                            </Text>

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    },
})
