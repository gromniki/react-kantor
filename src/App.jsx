import { Layout } from './components/Layout/Layout';
import { RestaurantList } from './components/RestaurantList/RestaurantList';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <RestaurantList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
