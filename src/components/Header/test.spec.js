import React from 'react';
import {Provider} from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import Header from './index';

const mockStore = configureMockStore();
const store = mockStore({
  application: {
    headerHeight: 20,
  },
});

test('Renders header with George text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const textElement = getByText(/George FE Test/i);

  expect(textElement).toBeInTheDocument();
});
