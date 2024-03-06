import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@/components/NotFound';
import Index from '@/components/Index';
import Hello from '@/components/Hello';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hello/:name" element={<Hello />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
