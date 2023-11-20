import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useBillboard = () => {
  const response = useSwr('/api/random', fetcher, { 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   });
   console.log(response);
   const { data, error, isLoading } =response;
  return {
    data,
    error,
    isLoading
  }
};

export default useBillboard;
