import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  filterSectionComponent,
  searchQueryTitle,
  productCount,
  priceFilterList,
  priceFilterBelow,
  priceFilterBetween,
  priceFilterAbove,
  clearFilterButton,
} from '../../utils/testid-list.ts';
import FilterSection from "./index.tsx";
import {TPriceFilter} from "../../types/TPriceFilter.ts";

const useAppContextMock = {
  priceFilter: undefined as TPriceFilter | undefined,
};

vi.mock('../../context/useAppContext.ts', () => ({
  default: () => ({
    searchQuery: 'test',
    data: [{ id: 1, name: 'Product 1', price: 30 }],
    priceFilter: useAppContextMock.priceFilter,
    setPriceFilter: vi.fn((newFilter: TPriceFilter | undefined) => {
      useAppContextMock.priceFilter = newFilter;
    }),
  }),
}));

vi.mock('../../hooks/useFilterByPrice.ts', () => ({
  default: vi.fn(() => vi.fn()),
}));

describe('Expect FilterSection component', () => {
  it('to be in the document', () => {
    const { getByTestId } = render(<FilterSection />);
    expect(getByTestId(filterSectionComponent)).toBeInTheDocument();
  });

  it('should render the search query title', () => {
    const { getByTestId } = render(<FilterSection />);
    expect(getByTestId(searchQueryTitle)).toBeInTheDocument();
    expect(getByTestId(searchQueryTitle)).toHaveTextContent('TEST');
  });

  it('should render the product count', () => {
    const { getByTestId } = render(<FilterSection />);
    expect(getByTestId(productCount)).toBeInTheDocument();
    expect(getByTestId(productCount)).toHaveTextContent('1 produto encontrado');
  });

  it('should render the price filter list', () => {
    const { getByTestId } = render(<FilterSection />);
    expect(getByTestId(priceFilterList)).toBeInTheDocument();
    expect(getByTestId(priceFilterBelow)).toBeInTheDocument();
    expect(getByTestId(priceFilterBetween)).toBeInTheDocument();
    expect(getByTestId(priceFilterAbove)).toBeInTheDocument();
  });

  it('should render the clear filter button when a filter is applied', () => {
    const { getByTestId, queryByTestId, rerender } = render(<FilterSection />);
    expect(queryByTestId(clearFilterButton)).toBeNull();
    fireEvent.click(getByTestId(priceFilterBelow));
    useAppContextMock.priceFilter = 'below';
    rerender(<FilterSection />);
    expect(getByTestId(clearFilterButton)).toBeInTheDocument();
  });
});