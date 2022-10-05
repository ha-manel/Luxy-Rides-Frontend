import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddCar from '../Components/AddCar/AddCar';
import store from '../Redux/configureStore';

describe('Add car form tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Add car page has a "add" button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <AddCar />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Add')).toBeTruthy();
  });
});
