import { findByRole, screen } from '@testing-library/react';
import Login from './index';
import { createMockProvider } from 'src/testMock';
import { setupServer } from 'msw/node';

describe('ログイン画面', () => {
  it('ログインボタンの初期状態', async () => {
    const { MockProvider, queryClient } = createMockProvider();
    const button = await findByRole('button');

    render(<Login />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
