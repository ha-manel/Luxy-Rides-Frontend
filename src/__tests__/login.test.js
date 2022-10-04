import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Components/Login/Login';
import store from '../Redux/configureStore';

describe('Log in tests', () => {
  it('Log in page has log in button', () => {
    const login = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      </>
    );

    expect(login.findByText('Log in')).toBeTruthy();
  });

  it('Log in page has a sign up link', () => {
    const login = render(
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      </>
    );

    expect(login.findByText('Sign up')).toBeTruthy();
  });
});
