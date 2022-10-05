import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Splash from '../Components/SplashScreen/Splash';
import store from '../Redux/configureStore';

describe('Splash screen tests', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Splash />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Splash page has a sign up link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Splash />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Sign up')).toBeTruthy();
  });

  it('Splash page has a log in link', () => {
    const register = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Splash />
          </BrowserRouter>
        </Provider>
      </>,
    );

    expect(register.findByText('Log in')).toBeTruthy();
  });
});
