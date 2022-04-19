import { useEffect } from 'react';
import ReactGA from 'react-ga';

const useGATracker = (router) => {
  useEffect(() => {
    ReactGA.initialize('UA-201842381-1');

    ReactGA.pageview(router.pathname + router.query);
  }, [router]);
};

export default useGATracker;
