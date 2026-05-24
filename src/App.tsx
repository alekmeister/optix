import { useWindowSize } from './hooks';
import { Desktop } from './layouts/Desktop';
import { Tablet } from './layouts/Tablet';
import { Mobile } from './layouts/Mobile';

export function App() {
  const { width } = useWindowSize();

  if (width <= 480) return <Mobile />;
  if (width <= 1024) return <Tablet />;
  return <Desktop />;
}
