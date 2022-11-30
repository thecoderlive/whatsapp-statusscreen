import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.profile_img}
    source={{uri: item.profile_img}}
    />
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.status_updated_time}>{item.status_updated_time}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'profile_img': {
        'width': '14vw',
        'height': '14vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 10
    },
    'name': {
        'color': '#0d0c0c',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'status_updated_time': {
        'color': '#605c5c',
        'fontSize': 14,
        'fontWeight': '300',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginBottom': 3
    }
});