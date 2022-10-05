import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Register from '../Components/Register/Register';
import store from '../Redux/configureStore';

describe('Register tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Register page has sign up button', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      </>
    );

    expect(register.findByText('Sign up')).toBeTruthy();
  });

  it('Sign up page has a log in link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      </>
    );

    expect(register.findByText('Log in')).toBeTruthy();
  });
});
