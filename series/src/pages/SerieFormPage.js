import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TextInput, Picker, Slider,
  ScrollView,  Button, KeyboardAvoidingView, ActivityIndicator, Alert
} from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, saveSerie, setWholeSerie, resetForm } from '../actions';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  picker : {
    height: 50,
    width: 100
  },
  semRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});



/**
* @param {[type]} serieForm propriedade adicionada pelo redux form através do  mapStateToProps
* @param {[type]} setField  propriedade (função) adicionada pelo redux form  através do  mapDispatchToProps
*/
class SerieFormPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
    }
  }
  componentDidMount() {
    const { setWholeSerie, navigation, resetForm} = this.props ;
    const { params } = navigation.state;

    if(params && params.serieToEdit){
        return setWholeSerie(params.serieToEdit);
    }
    return resetForm();
  }

  render(){
    const {serieForm, setField, saveSerie, navigation} = this.props;

    return (
      <KeyboardAvoidingView keyboardVerticalOffset={200}  behavior="padding" enabled>
        <ScrollView>
          <FormRow first>
            <TextInput
              style={styles.input}
              placeholder="Titulo"
              value={serieForm.title}
              onChangeText={value => setField('title', value)}
              />
          </FormRow>

          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="Url da imagem"
              value={serieForm.img}
              onChangeText={value => setField('img', value)}
              />
          </FormRow>


          <FormRow>
            <Picker
              selectedValue={serieForm.gender}
              style={styles.picher}
              onValueChange={(itemValue, itemIndex) => setField('gender', itemValue) }>
              <Picker.Item label="Policial" value="Policial" />
              <Picker.Item label="Comédia" value="Comédia" />
              <Picker.Item label="Terror" value="Terror" />
            </Picker>
          </FormRow>

          <FormRow>
            <View style={styles.semRow}>
              <Text>Nota: </Text>
              <Text>{serieForm.rate} </Text>
            </View>
            <Slider
              maximumValue={100}
              minimumTrackTintColor={0}
              onValueChange= {value => setField ('rate', value)}
              value={serieForm.rate}
              step={1}
              />
          </FormRow>

          <FormRow>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={serieForm.description}
              onChangeText={value => setField('description', value)}
              numberOfLines={5}
              multiline={true}
              />
          </FormRow>

          {
            this.state.isLoading ? <ActivityIndicator /> :
              <Button
              title="Salvar"
              onPress={async ()=>{
                this.setState({isLoading: true});
                try{
                  await saveSerie(serieForm)
                  navigation.goBack();
                }catch(error){
                  Alert.alert('Erro!', error.message)
                }finally {
                    this.setState({isLoading: false});
                }
              }}
              />
          }


        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

}

  mapStateToProps = (state)=> {
    return {
      serieForm: state.serieForm
    }
  }

  const mapDispatchToProps = {
    setField,
    saveSerie,
    setWholeSerie,
    resetForm
  };


export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
