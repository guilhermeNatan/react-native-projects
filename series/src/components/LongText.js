import React from 'react';
import { Text, View, StyleSheet,
  TouchableWithoutFeedback, AccessibilityInfo,
  LayoutAnimation, NativeModules  } from 'react-native';

const styles = StyleSheet.create({

  line: {
    paddingTop: 3,
    paddingBottom: 3,

  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline'
  },
  content: {
    flex: 3,
    textAlign: 'justify', // ios
  },
  collapsed: {
    maxHeight: 65
  },
  expanded: {
    flex: 1
  }
});

// Android
NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

class  LongText extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      isExpanded: true,
    }
  }

  componentWillUpdate(nextprops, nextState){
      LayoutAnimation.spring();
  }

  toggleIsExpanded(){
    const { isExpanded } = this.state;
    this.setState({isExpanded : !isExpanded})

  }
  render () {

    const { label = '', content = '' } = this.props;
    const { isExpanded } = this.state;
    return (
      <View style={styles.line}>
        <Text style={[
          styles.cell,
          styles.label,
        ]}
        >
          {label}
        </Text>
        <TouchableWithoutFeedback
         onPress={() => this.toggleIsExpanded()}>
          <View>
              <Text style={[styles.cell, styles.content, isExpanded ?
                styles.expanded :  styles.collapsed]}>{content}</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

export default LongText ;
