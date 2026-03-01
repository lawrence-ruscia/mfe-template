import ReactDOM from 'react-dom/client';

import '../styles/index.css';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { GridColumn } from '@/components/layout/GridColumn';

const App = () => (
  <Container className="border-2 border-red-500">
    <Grid>
      <GridColumn span={{ lg: 3 }} className="border-2 border-blue-400">
        <aside className="p-4">Sidebar</aside>
      </GridColumn>
      <GridColumn span={{ base: 4, md: 8, lg: 9 }} className="border-2 border-blue-400">
        <div className="p-4">Name: mfe-template</div>
        <div className="p-4">Framework: react-19</div>
      </GridColumn>
    </Grid>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
