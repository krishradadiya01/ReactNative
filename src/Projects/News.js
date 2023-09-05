import {ScrollView, Text, Image, View} from 'react-native';
import React from 'react';

const News = () => {
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink',
          borderWidth: 2,
          margin: 10.5,
        }}>
        <Image
          style={{margin: 10}}
          source={{
            width: 350,
            height: 200,
            uri: 'https://www.hindustantimes.com/ht-img/img/2023/08/31/550x309/rohit_babar_1666237197564_1693463461799.JPG',
          }}
        />
        <Text
          style={{
            paddingLeft: 14,
            paddingRight: 14,
            paddingBottom: 13,
            textAlign: 'justify',
          }}>
          Truth, at times, can be harsh and for cricket fans, it can also be
          cruel. There is a good chance, and that is stating it as moderately as
          possible, that the India vs Pakistan Asia Cup 2023 Group A match at
          the Pallekele International Cricket Stadium.
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightyellow',
          borderWidth: 2,
          margin: 10.5,
        }}>
        <Image
          style={{margin: 10}}
          source={{
            width: 350,
            height: 200,
            uri: 'https://ss-i.thgim.com/public/incoming/i9140n/article67252551.ece/alternates/LANDSCAPE_1200/Babar%20Azam%20and%20Iftikhar%20Ahmed%20forged%20a%20majestic%20double%20century%20partnership%20against%20Nepal%20in%20the%20Asia%20Cup%202023%20opening%20match%20at%20the%20Multan%20Cricket%20Stadium.',
          }}
        />
        <Text
          style={{
            paddingLeft: 14,
            paddingRight: 14,
            paddingBottom: 13,
            textAlign: 'justify',
          }}>
          Key Updates ICYMI - Highest fifth wicket partnership for Pakistan in
          ODIs Playing XIs Toss update Pakistan has already announced its
          playing XI AUGUST 30, 2023 21:31 A fine start for Pakistan in Asia Cup
          2023 As per Reports Pakistan looking very Dangerous.
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink',
          borderWidth: 2,
          margin: 10.5,
        }}>
        <Image
          source={{
            width: 350,
            height: 200,
            uri: 'https://crickettimes.com/wp-content/uploads/2023/08/Tom-Moody-and-Rohit-Sharma.webp',
          }}
        />
        <Text
          style={{
            paddingLeft: 14,
            paddingRight: 14,
            paddingBottom: 3,
            paddingTop: 10,
            textAlign: 'justify',
          }}>
          Just like cricket enthusiasts, veteran cricketers from across the
          world are also very excited about the mega ICC event and are eagerly
          waiting for the tournament to unfold. Many are even coming up with
          numerous predictions regarding the leading run-scorer.
        </Text>
      </View>
    </ScrollView>
  );
};

export default News;
