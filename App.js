import {HomeScreen, MapScreen} from './pages';
import {StackNavigator} from 'react-navigation';

const App = StackNavigator ({
  Home: {screen: HomeScreen},
  Maps: {screen: MapScreen},
});

export default App;