import React from 'react';
import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      entries: this.props.entries,
    });
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{ item.title }</Text>
      </View>
    );
  }

  render () {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}