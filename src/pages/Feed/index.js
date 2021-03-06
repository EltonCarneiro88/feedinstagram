import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, Button , View, ScrollView, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import logo from '../../assets/logo.png';
import Like from '../../components/Like';


import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
import { useLinkProps } from '@react-navigation/native';

export default function Feed(props) {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([])

  const MAX_LENGTH = 250;

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);
    //http://localhost:3000/feed?_expand=author&_limit=4&_page=1
    //utilizar server.js no jsonserver
    //https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=4
    //utilizar o server2.js no www.mockapi.io
    axios
    .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`)
    .then(response => {
      const totalItems = response.headers["x-total-count"]
      const data = response.data
      //console.log(data)
      setLoading(false)
      setTotal(Math.floor(totalItems / 4));
      setPage(pageNumber + 1);
      setFeed(shouldRefresh ? data : [...feed, ...data]);
    })
    .catch(err => {
      setError(err.message);
      setLoading(true)
    })
  }

  async function refreshList() {
    setRefreshing(true);
    
    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      } 
    } catch (error) {
      // Error saving data
    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text])
    } catch (error) {
      // Error saving data
    }
  }

    

  useEffect(() => {
    loadPage()
  }, []);

  const renderItem = ({item}) => {
    return (
      <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name style={styles.boldText} >{item.author.name}</Name>
            </Header>

            <LazyImage
              aspectRatio={item.aspectRatio} 
              shouldLoad={viewable.includes(item.id)} 
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
            />

            <View style={styles.container}>
              <View style={styles.spaceImg}>
                <Like />
              </View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Likes')
                }}
              >
                <Text style={styles.textCurt}>
                  Ver todas as curtidas
                </Text>
              </TouchableOpacity>
            </View>
           
            <Description style={styles.textAutor}>
              <Name style={styles.boldText}>{item.author.name}</Name>  {item.description}
            </Description>
            
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Comments')
              }}
            >
                <Text style={styles.textComent}>
                  Ver todos os comentários
                </Text>
            </TouchableOpacity>

            <Description style={styles.textAutor}>
              {comentarios}
            </Description>

            <TextInput
              multiline={true}
              onChangeText={(text) => setText(text)}
              placeholder={"Adicione um comentário"}
              style={[styles.text]}
              maxLength={MAX_LENGTH}
              value={text}/>

            <Button
              title="Publicar"
              onPress={() => onSave(String(item.id))}
              accessibilityLabel="PUBLICAR">
            </Button>

      </Post>
    )
}

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <Image
        style={styles.imagem}
        source={logo}
      />
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={loading && <Loading />}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      lineHeight: 33,
      color: "#333333",
      padding: 16,
      paddingTop: 16,
      minHeight: 70,
      borderTopWidth: 1,
      borderColor: "rgba(212,211,211, 0.3)"
    },
    imagem:{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      marginBottom: 5
    },
    boldText:{
      fontWeight: 'bold',
      fontSize: 18,
    },
    container:{
      flexDirection: 'row',
      marginTop: 5,
      paddingHorizontal: 5,
      paddingVertical: 5
    },
    textAutor:{
      fontSize: 17,
      
    },
    textCurt:{
      paddingTop : 7,
      paddingLeft: 10,
      fontSize: 18
    },
    textComent:{
      paddingLeft: 14,
      fontSize: 18
    },
    spaceImg:{
      paddingLeft: 6,
      paddingTop: 2
    }
})
