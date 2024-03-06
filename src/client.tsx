import { createRoot } from 'react-dom/client';
import RouteSwitch from '@/components/RouteSwitch';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);
root.render(<RouteSwitch />);
