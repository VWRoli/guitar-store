import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './css/main.min.css';

import AdminLayout from './AdminLayout';
import PublicLayout from './PublicLayout';

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
