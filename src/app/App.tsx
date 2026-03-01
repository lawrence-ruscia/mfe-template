import ReactDOM from 'react-dom/client';

import '../styles/index.css';

import { ListPageLayout } from '@/components/layout/templates/ListPageLayout';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';

const App = () => (
  <ListPageLayout
    header={
      <PageHeader
        title="Users"
        description="Manage application users"
        actions={<Button>Add User</Button>}
        className="border-2 border-green-500"
      />
    }
    filters={<input placeholder="Search by name" />}
    content={
      <div className="border-2 border-green-500">
        <ul>
          <li>Record 1</li>
          <li>Record 2</li>
          <li>Record 3</li>
        </ul>
      </div>
    }
  />
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);
