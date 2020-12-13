import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

const LikeList = (props) => {
    const { item } = props;

    const renderItem = ({ item }) => {
        return (
            <View style={style.line}>
                <Image style={style.avatar} source={{ uri: item.author.avatar }} />
                <Text style={style.lineText} key={item.author.name}>
                    {item.author.name}
                </Text>
            </View>
        );
    }

    const header = () => {
        return (
          <View style={style.headerStyle}>
          </View>
        );
    };

    return (
        <View>
        <SafeAreaView>
            <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item) => {
                item.author.name;
            }}
            ListHeaderComponent={header}
            stickyHeaderIndices={[0]}
            />
        </SafeAreaView>
        </View>
    );
}

const style = StyleSheet.create({
    line: {
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
    },
    avatar: {
      aspectRatio: 1,
      marginLeft: 10,
      flex: 1,
      borderRadius: 50,
    },
    lineText: {
      fontSize: 20,
      paddingLeft: 20,
      flex: 7,
    },
    headerStyle: {
        flex: 1,
        height: 20,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

export default LikeList;
