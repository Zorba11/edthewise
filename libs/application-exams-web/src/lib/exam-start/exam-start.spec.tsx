import { render } from '@testing-library/react';

import ExamStart from './exam-start';

describe('ExamStart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExamStart />);
    expect(baseElement).toBeTruthy();
  });
});
