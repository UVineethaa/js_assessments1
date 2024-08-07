import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import ItemList from './ItemList';
import { AuthProvider, useAuth } from './AuthContext';
import ErrorBoundary from './ErrorBoundary';
import List from './List';
import Carousel from './Carousel';
import DraggableList from './DraggableList';
import Tooltip from './Tooltip';
import VirtualizedList from './VirtualizedList'; // Assuming you have this component
import './App.css'; // Import the general styles

// Lazy load components
const About = lazy(() => import('./About'));
const Counter = lazy(() => import('./Counter'));
const DataFetcher = lazy(() => import('./DataFetcher'));
const FormComponent = lazy(() => import('./formsub'));
const PaginatedList = lazy(() => import('./PaginatedList'));
const CounterWithHooks = lazy(() => import('./CounterWithHooks'));
const ChartComponent = lazy(() => import('./ChartComponent'));
const Login = lazy(() => import('./Login'));
const Logout = lazy(() => import('./Logout'));
const Dashboard = lazy(() => import('./Dashboard'));
const InfiniteScrollList = lazy(() => import('./InfiniteScrollList'));

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
  
      <AuthProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1>Welcome to My React App</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/items">Items List</Link></li>
                  <li><Link to="/counter">Counter</Link></li>
                  <li><Link to="/counter-hooks">Counter with Hooks</Link></li>
                  <li><Link to="/data">Data Fetcher</Link></li>
                  <li><Link to="/form">Form</Link></li>
                  <li><Link to="/pagination">Pagination</Link></li>
                  <li><Link to="/chart">Chart</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/list">List</Link></li>
                  <li><Link to="/carousel">Carousel</Link></li>
                  <li><Link to="/draggable">Draggable List</Link></li>
                  <li><Link to="/tooltip">Tooltip</Link></li>
                  <li><Link to="/virtualized">Virtualized List</Link></li>
                </ul>
              </nav>
            </header>
            <main>
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/items" element={<ItemList />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/counter-hooks" element={<CounterWithHooks />} />
                    <Route path="/data" element={<DataFetcher />} />
                    <Route path="/form" element={<FormComponent />} />
                    <Route path="/pagination" element={<PaginatedList />} />
                    <Route path="/chart" element={<ChartComponent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                    
                    <Route path="/list" element={<List />} />
                    <Route path="/carousel" element={<Carousel items={[
                      'https://via.placeholder.com/800x400?text=Slide+1',
                      'https://via.placeholder.com/800x400?text=Slide+2',
                      'https://via.placeholder.com/800x400?text=Slide+3'
                    ]} />} />
                    <Route path="/draggable" element={<DraggableList />} />
                    <Route path="/tooltip" element={<Tooltip />} />
                    <Route path="/virtualized" element={<VirtualizedList />} /> {/* Add VirtualizedList route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <InfiniteScrollList />
                </Suspense>
              </ErrorBoundary>
            </main>
          </div>
        </Router>
      </AuthProvider>
  
  );
}

export default App;