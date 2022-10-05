import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CarDetails from '../Components/CarDetails/CarDetails';
import store from '../Redux/configureStore';

describe('Car detail tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
