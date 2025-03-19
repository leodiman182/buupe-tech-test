import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  filterSectionComponent,
  mobileFilterSectionComponent,
  searchQueryTitle,
  productCount,
  priceFilterList,
  priceFilterBelow,
  priceFilterBetween,
  priceFilterAbove,
  clearFilterButton,
} from '../../utils/testid-list.ts';
import FilterSection from "./index.tsx";
import { TPriceFilter } from "../../types/TPriceFilter.ts";
import { theme } from "../../styles/ThemeProvider.ts";
import { ThemeProvider } from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

const useAppContextMock = {
  priceFilter: undefined as TPriceFilter | undefined,
  isFilterDrawerOpen: false,
};

vi.mock('../../context/useAppContext.ts', () => ({
  default: () => ({
    searchQuery: 'test',
    data: [{ id: 1, name: 'Product 1', price: 30 }],
    priceFilter: useAppContextMock.priceFilter,
    isFilterDrawerOpen: useAppContextMock.isFilterDrawerOpen,
    setPriceFilter: vi.fn((newFilter: TPriceFilter | undefined) => {
      useAppContextMock.priceFilter = newFilter;
    }),
    setIsFilterDrawerOpen: vi.fn((newOpen: boolean) => {
      useAppContextMock.isFilterDrawerOpen = newOpen;
    }),
  }),
}));

vi.mock('../../hooks/useFilterByPrice.ts', () => ({
  default: vi.fn(() => vi.fn()),
}));

describe('Expect FilterSection component', () => {
  it.skip('to be in the document for large screens', () => {
    vi.mocked(useMediaQuery).mockImplementation(() => true);

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );

    expect(getByTestId(filterSectionComponent)).toBeInTheDocument();
  });

  it('to be in the document for small screens', () => {
    useAppContextMock.isFilterDrawerOpen = true;
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(getByTestId(mobileFilterSectionComponent)).toBeInTheDocument();
  });

  it('should render the search query title', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(getByTestId(searchQueryTitle)).toBeInTheDocument();
    expect(getByTestId(searchQueryTitle)).toHaveTextContent('TEST');
  });

  it('should render the product count', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(getByTestId(productCount)).toBeInTheDocument();
    expect(getByTestId(productCount)).toHaveTextContent('1 produto encontrado');
  });

  it('should render the price filter list', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(getByTestId(priceFilterList)).toBeInTheDocument();
    expect(getByTestId(priceFilterBelow)).toBeInTheDocument();
    expect(getByTestId(priceFilterBetween)).toBeInTheDocument();
    expect(getByTestId(priceFilterAbove)).toBeInTheDocument();
  });

  it('should render the clear filter button when a filter is applied', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(queryByTestId(clearFilterButton)).toBeNull();
    fireEvent.click(getByTestId(priceFilterBelow));
    useAppContextMock.priceFilter = 'below';
    rerender(
      <ThemeProvider theme={theme}>
        <FilterSection />
      </ThemeProvider>
    );
    expect(getByTestId(clearFilterButton)).toBeInTheDocument();
  });
});