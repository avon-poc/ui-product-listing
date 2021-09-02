import Category from './src/pages/category';
import Offer from './src/pages/offers';
import Text from './src/components/Text';
import List from './src/components/List';
import Item from './src/components/Item';


const config = {
    componentMappings: {
        // 'spa-lm:pages/Home': Home,
        'spa-lm:pages/next-basic': Offer,
        'spa-lm:pages/next-category': Category,
        'spa-lm:pages/next-offer': Offer,

        'spa-lm:components/Text': Text,
        'spa-lm:components/List': List,
        'spa-lm:components/Item': Item,
      },
};

export default config;
