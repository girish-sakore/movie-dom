export const OMDB_API_KEY =
  import.meta.env.VITE_OMDB_API_KEY || (import.meta.env.MODE === 'test' ? 'test-key' : '');

export const DEFAULT_SEARCH_TERM = 'Deadpool';
