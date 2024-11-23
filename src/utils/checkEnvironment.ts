export const checkEnvironment = () => {
  const base_url =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://hyperhire-landing-page-fvh6.vercel.app';

  return base_url;
};
