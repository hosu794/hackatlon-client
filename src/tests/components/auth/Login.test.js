import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from 'redux-mock-store'
import { fireEvent, render, wait } from '@testing-library/react';
import TestComponent from '../../../components/auth/Login'
import { MemoryRouter } from 'react-router-dom'
import {Provider} from 'react-redux';


const mockStore = configureStore([]);

let store = mockStore({
    authentication: {
        loading: false,
        error: true
    }
})



it("submits correct values", async() => {
    const { container} = render(
        <MemoryRouter>
        <Provider store={store}>
          <TestComponent />
        </Provider>
      </MemoryRouter>
    )

    const username = container.querySelector('input[name="username"]')
    const submit = container.querySelector('button[type="submit"]')
    const password = container.querySelector('input[name="password"]')


    store.dispatch = jest.fn();
    
    await wait(() => {
        fireEvent.change(username, {
          target: {
            value: "mockname"
          }
        })
      })

      await wait(() => {
        fireEvent.change(password, {
          target: {
            value: "mockpassword"
          }
        })
      })

      await wait(() => {
        fireEvent.click(submit)
      })

      await wait(() => {
        expect(store.dispatch).toHaveBeenCalledTimes(1);
      });

})