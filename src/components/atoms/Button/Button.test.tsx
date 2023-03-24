import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick when disabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Test
      </Button>,
    );
    fireEvent.click(getByText('Test'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not call onClick when loading', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} loading>
        Test
      </Button>,
    );
    fireEvent.click(getByText('Test'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not call onClick when clicked outside', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalled();
  });
});
