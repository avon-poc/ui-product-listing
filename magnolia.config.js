import Category from './src/pages/category';
import Home from './src/pages/Home';
import Offer from './src/pages/offers';
import Text from './src/components/Text';
import { UiImg, UiTrendingBlock } from 'design-components'

const config = {
    componentMappings: {
        // 'spa-lm:pages/Home': Home,
        'spa-lm:pages/next-category': Category,
        'spa-lm:pages/next-offer': Offer,
        'spa-lm:pages/next-basic': Home,


        'spa-lm:components/Text': Text,
        'spa-lm:components/Image': UiImg,
        'spa-lm:components/blockTrending': UiTrendingBlock,
      },
};

export default config;
