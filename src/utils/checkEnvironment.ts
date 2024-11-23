export const checkEnvironment = (host: string | null) => {
  const base_url = process.env.NODE_ENV === 'development' ? `http://${host}` : `https://${host}`;

  return base_url;
};
