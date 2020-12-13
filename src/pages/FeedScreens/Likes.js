import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import LikeList from '../../../src/components/LikeList';

export default class Likes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          item: [],
        };
    }
    
    componentDidMount() {
    axios.get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=4`)
    .then(res => {
        const item = res.data;
        this.setState({ item });
    })
    }
    render() {
        return (
        <View>
            <LikeList
                item={this.state.item}
            />
        </View>
        );
    }
}