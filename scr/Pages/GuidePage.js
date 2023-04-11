import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Text, StatusBar } from 'react-native';

import Header from '../lib/Layout/Header/Header.js';
import Footer from '../lib/Layout/Footer/Footer.js';
import GuideTypes from '../lib/Guide/GuideTypes/GuideTypes.js';
import GuideDifficulty from '../lib/Guide/GuideDifficulity/GuideDifficulity.js';
import FavoriteType from '../lib/Things/Favorite/FavoriteType/FavoriteType.js';

export default function GuidePage({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header loggedIn = {true} navigation={navigation} navigationLink={"HomePage"}/>
      <ScrollView style={styles.scrollView}>
        <FavoriteType  navigation={navigation} navigationLink={'GuideHome'} string={require('../../public/guides.json')}/>
        <GuideTypes navigation={navigation} />
        <GuideDifficulty navigation={navigation}/>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollView: {
    backgroundColor: '#fff',
  }
});