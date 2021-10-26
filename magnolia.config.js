import Category from './src/pages/category';
import Home from './src/pages/Home';
import Offer from './src/pages/offers';
import Text from './src/components/Text';
import Image from './src/components/Image';
import List from './src/components/List';
import Item from './src/components/Item';

import { UiTrendingBlock, UiImg } from 'design-components'

const config = {
    componentMappings: {
        // 'spa-lm:pages/Home': Home,
        'spa-lm:pages/next-category': Category,
        'spa-lm:pages/next-offer': Offer,
        'spa-lm:pages/next-basic': Home,

        'spa-lm:components/Text': Text,
        'spa-lm:components/Image': UiImg,
        'spa-lm:components/blockTrending': UiTrendingBlock
      },
};

export default config;
