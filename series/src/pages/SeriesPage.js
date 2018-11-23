import React from 'react';
import {
  View, Text, FlatList, StyleSheet, ActivityIndicator,
} from 'react-native';

import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

import  { connect } from 'react-redux';
import { watchSeries } from '../actions';


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
  marginTop: {
    marginTop: 5,
  },
  marginBottom: {
    marginBottom: 5,
  }
});

const isEven = (number) => number%2 === 0;

class SeriesPage extends React.Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
      this.props.watchSeries();
    }
    render(){
      const {series, navigation} = this.props;
      if(series === null){
        return <ActivityIndicator />
      }
      return(
        <View>
            <FlatList
                keyExtractor={item => item.title}
                data={[...series, {isLast: true}]}
                renderItem={({item, index}) => (
                  item.isLast ?
                  <AddSerieCard
                      isFirstColumn={isEven(index)}
                        onNavigate={() => navigation.navigate('SerieForm')}
                      />
                  :
                  <SerieCard
                    key={item.title}
                    serie={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => navigation.navigate('SerieDetail', {serie: item})}
                    />
                )}
                numColumns={2}
                ListHeaderComponent={props => (<View style={styles.marginTop}/>)}
                ListFooterComponent={props => (<View style={styles.marginBottom}/>)}
             />
        </View>
      );
    }
}


const mapStateToProps = state => {
  const { series } = state;
  // ainda não foi feita a chamada ao firebase
  if(series === null){
    return { series }
  }
  const keys = Object.keys(series);
  const seriesWithKeys = keys.map( id => { return { ...series[id], id}})
  return { series: seriesWithKeys };
}

export default connect(mapStateToProps, { watchSeries })(SeriesPage);
