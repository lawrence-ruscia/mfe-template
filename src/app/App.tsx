import ReactDOM from 'react-dom/client';

import '../styles/index.css';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { GridColumn } from '@/components/layout/GridColumn';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';

const App = () => (
  <Container className="border-2 border-red-500">
    <Grid>
      <GridColumn span={{ base: 4, md: 8, lg: 12 }} className="border-2 border-blue-400">
        <PageHeader
          title="Users"
          description="Manage application users"
          actions={<Button>Add User</Button>}
          className="border-2 border-green-500"
        />
        <div className="p-4">Name: mfe-template</div>
        <div className="p-4">Framework: react-19</div>
      </GridColumn>
    </Grid>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
