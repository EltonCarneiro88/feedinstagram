import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import like from '../assets/like.png';
import like2 from '../assets/like2.png';

export default function Likes() {

    const [liked, setLikedImage] = useState(like);

    async function changeLikeStatus() {
        if (liked === like) {
            setLikedImage(like2);
        } else {
            setLikedImage(like);
        }
    }
    
    return (
        <View>
            <TouchableOpacity onPress={changeLikeStatus}>
                <Image source={liked} />
                    </TouchableOpacity>
                </View>
  );
};
