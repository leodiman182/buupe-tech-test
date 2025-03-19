import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackToTopButton from "./index.tsx";

describe('Expect BackToTopButton component', () => {
  window.scrollTo = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should not render the button initially', () => {
    const { queryByTestId } = render(<BackToTopButton />);
    expect(queryByTestId('back-to-top-button')).toBeNull();
  });

  it('should render the button when scrolling beyond 400px', () => {
    const { queryByTestId } = render(<BackToTopButton />);

    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    expect(queryByTestId('back-to-top-button')).toBeInTheDocument();
  });

  it('should hide the button when scrolling back to the top', () => {
    const { queryByTestId } = render(<BackToTopButton />);

    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);
    expect(queryByTestId('back-to-top-button')).toBeInTheDocument();

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    fireEvent.scroll(window);
    expect(queryByTestId('back-to-top-button')).toBeNull();
  });

  it('should call scrollToTop when the button is clicked', () => {
    const { getByTestId } = render(<BackToTopButton />);

    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    const button = getByTestId('back-to-top-button');
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});