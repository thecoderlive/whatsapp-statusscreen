import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import HomeFeed from './HomeFeed'

const Status = () => (
<ScrollView style={styles.status} showsVerticalScrollIndicator={false}>
<HomeFeed item={item.home_feed}/>
</ScrollView>
)

export default Status;

const styles = StyleSheet.create({
    
});