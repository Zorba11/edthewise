import { render } from '@testing-library/react';

import { SignIn } from './sign-in';

describe('SignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignIn />);
    expect(baseElement).toBeTruthy();
  });
});
