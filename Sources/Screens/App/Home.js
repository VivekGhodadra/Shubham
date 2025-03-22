import { useEffect } from 'react';
import { RNContainer } from '../../Common';
import { usePermissions } from '../../Hooks';

export default function Home() {
  const { requestPermissions } = usePermissions();

  useEffect(() => {
    requestPermissions();
  }, []);

  return <RNContainer></RNContainer>;
}
