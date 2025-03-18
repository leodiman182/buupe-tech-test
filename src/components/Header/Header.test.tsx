import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Header from './index.tsx';
import '@testing-library/jest-dom';
import {closeIcon, headerComponent, searchButtonComponent, searchComponent, logoLink} from '../../utils/testid-list.ts';

vi.mock('../../context/useAppContext.ts', () => ({
  default: () => ({
    searchQuery: '',
    setSearchQuery: vi.fn(),
  }),
}));

vi.mock('../../hooks/useFilterProducts.ts', () => ({
  default: vi.fn(() => vi.fn()),
}));

vi.mock('../../hooks/useResetSearch.ts', () => ({
  default: vi.fn(() => vi.fn()),
}));

describe('Expect Header component', () => {
  it('to be in the document', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId(headerComponent)).toBeInTheDocument();
  });

  it('should render the search input', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId(searchComponent)).toBeInTheDocument();
  });

  it('should render the search button', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId(searchButtonComponent)).toBeInTheDocument();
  });

  it('should render the close icon when the search input has a value', () => {
    const { getByTestId, queryByTestId } = render(<Header />);

    const searchInput = getByTestId(searchComponent) as HTMLInputElement;
    expect(queryByTestId(closeIcon)).toBeNull();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(queryByTestId(closeIcon)).toBeInTheDocument();
  });

  it('should clear the search input when the close icon is clicked', () => {
    const { getByTestId, queryByTestId } = render(<Header />);

    const searchInput = getByTestId(searchComponent) as HTMLInputElement;

    expect(queryByTestId(closeIcon)).toBeNull();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    const closeIconElement = getByTestId(closeIcon);
    expect(closeIconElement).toBeInTheDocument();

    fireEvent.click(closeIconElement);
    expect(searchInput.value).toBe('');
  });

  it('should submit the search form', () => {
    const { getByTestId } = render(<Header />);

    const searchInput = getByTestId(searchComponent) as HTMLInputElement;
    const searchButton = getByTestId(searchButtonComponent);

    fireEvent.change(searchInput, { target: { value: 'test' } });

    fireEvent.click(searchButton);
    expect(searchInput.value).toBe('test');
  });

  it('should have a correct logo link', () => {
    const { getByTestId } = render(<Header />);

    const logoLinkTag = getByTestId(logoLink) as HTMLAnchorElement
    expect(logoLinkTag).toHaveAttribute('href', 'https://www.buupe.com/register');
    expect(logoLinkTag).toHaveAttribute('target', '_blank');
    expect(logoLinkTag).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should have an empty search input initially', () => {
    const { getByTestId } = render(<Header />);

    const searchInput = getByTestId(searchComponent) as HTMLInputElement;
    expect(searchInput.value).toBe('');
  });

  it('should update the search input value when typing', () => {
    const { getByTestId } = render(<Header />);

    const searchInput = getByTestId(searchComponent) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });
});