// import Basic from './pages';
// import Heading from './components/magnolia/Heading';
// import Test from './pages/test';
import Home from "./src/pages/Home";
import Text from "./src/components/Text";
import List from "./src/components/List";
import Item from "./src/components/Item";

const config = {
  componentMappings: {
    // 'spa-lm:pages/Home': Home,
    "spa-lm:pages/next-basic": Home,

    "spa-lm:components/Text": Text,
    "spa-lm:components/List": List,
    "spa-lm:components/Item": Item,
  },
};

export default config;
