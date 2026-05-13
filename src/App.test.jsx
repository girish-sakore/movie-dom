import { render, screen } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import App from './App.jsx';

beforeEach(() => {
  global.fetch = vi.fn(async () => ({
    ok: true,
    json: async () => ({
      Response: 'True',
      totalResults: '1',
      Search: [
        {
          Title: 'Deadpool',
          Year: '2016',
          imdbID: 'tt1431045',
          Type: 'movie',
          Poster: 'N/A',
        },
      ],
    }),
  }));
});

test('renders the search experience', async () => {
  render(<App />);

  expect(screen.getByRole('searchbox', { name: /search movies/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /find the next story/i })).toBeInTheDocument();
});
