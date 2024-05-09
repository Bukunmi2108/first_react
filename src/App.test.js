import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Pricing from './Pricingsec';
import Profile from './Profile';
import AirbnbNav from './AirbnbNav';
import AirbnbCard from './AirbnbCard';

test('renders learn react link', () => {
  render(<Navbar />);
  render(<Main />);
  render(<About />);
  render(<Pricing />);
  render(<Profile />);
  render(<AirbnbNav />);
  render(<AirbnbCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
