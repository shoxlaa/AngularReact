import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

class Application extends React.Component
{
  render() {
    return (
        <div> hi </div>


    );
  }
}


test('renders learn react link', () => {
  render(<Application />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
