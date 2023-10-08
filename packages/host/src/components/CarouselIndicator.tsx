import React from 'react';
import {View, StyleSheet} from 'react-native';

import theme from '../components/Theme';

type Props = {
  count: number;
  activeIndex: number;
};

const CarouselIndicator = ({count, activeIndex}: Props) => {
  const indicators = [];

  for (let i = 0; i < count; i++) {
    indicators.push(
      <View
        key={i}
        style={[
          styles.indicator,
          i === activeIndex && styles.activeIndicator,
        ]}
      />,
    );
  }

  return <View style={styles.container}>{indicators}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: theme.colors.primary,
  },
});

export default CarouselIndicator;