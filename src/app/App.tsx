import ReactDOM from 'react-dom/client';

import '../styles/index.css';
import { Container } from '@/components/layout/Container';

const App = () => (
  <Container className="border-2 border-red-500">
    <div>Name: mfe-template</div>
    <div>Framework: react-19</div>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
