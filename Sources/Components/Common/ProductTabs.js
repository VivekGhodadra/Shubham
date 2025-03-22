import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontSize, hp, wp } from '../../Theme';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          onPress={() => setActiveTab('description')}
          style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'description' && styles.activeTabText,
            ]}>
            Product description
          </Text>
          {activeTab === 'description' && <View style={styles.underline} />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('review')}
          style={styles.tab}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'review' && styles.activeTabText,
            ]}>
            Review
          </Text>
          {activeTab === 'review' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
    marginTop: hp(3),
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: hp(1),
    position: 'relative',
    borderBottomWidth: 1,
  },
  tabText: {
    fontSize: FontSize.font16,
    color: '#000',
    marginBottom: hp(1),
  },
  activeTabText: {
    color: '#2E8B57', // Green
    fontWeight: '500',
  },
  underline: {
    height: 2,
    backgroundColor: '#2E8B57',
    width: '100%',
    position: 'absolute',
    bottom: -1,
  },
  content: {
    paddingVertical: 10,
  },
});
