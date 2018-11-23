import React from 'react';
import {
  View, Button, TextInput, Text, StyleSheet, ActivityIndicator,
  Image, ScrollView,
} from 'react-native';
import { Line } from '../components/Line';
import  LongText  from '../components/LongText';
import { connect } from 'react-redux';
import { deleteSerie } from '../actions';

const styles = StyleSheet.create({
  img: {
    aspectRatio: 1
  },
  buttonWrapper: {
    margin: 10
  },
});


class SerieDetailPage extends React.Component {


  render(){
    const { navigation }  =  this.props;
    const { serie} = navigation.state.params;

    return (
      <ScrollView>
        {
          serie.img ?
          <Image style={styles.img} source={{uri: serie.img}} />
          : null
        }

        <Line label="Titulo" content={serie.title} />
        <Line label="Gênero" content={serie.gender} />
        <Line label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />

      <View style={styles.buttonWrapper}>
        <Button
          title="Editar"
          onPress={()=> {
            navigation.replace('SerieForm', { serieToEdit: serie})
          }} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Deletar"
          color="rgb(187, 18, 7)"
          onPress={async ()=> {
            const hasDeleted = await this.props.deleteSerie(serie);
            if(hasDeleted){
              navigation.goBack();
            }
          }} />
      </View>
      </ScrollView>);
  }
}

export default connect(null, {deleteSerie} ) (SerieDetailPage);
