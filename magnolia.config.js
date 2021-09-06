import React from 'react';
import Category from './src/pages/category';
import Offer from './src/pages/offers';
import Text from './src/components/Text';
import Image from './src/components/Image';
import List from './src/components/List';
import Item from './src/components/Item';

// import { ComponentWrapper } from './helper/ComponentWrapper'

import { defineCustomElements } from 'design-web-components/loader'

const ComponentWrapper = (tag) => {
  defineCustomElements()
  return () => React.createElement(tag)
}

const config = {
    componentMappings: {
        // 'spa-lm:pages/Home': Home,
        'spa-lm:pages/next-category': Category,
        'spa-lm:pages/next-offer': Offer,

        'spa-lm:components/Text': Text,
        'spa-lm:components/Image': ComponentWrapper('ui-img'),
      },
};

export default config;
