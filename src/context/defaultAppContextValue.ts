export const defaultAppContextValue = (
  {
    searchQuery = '',
    setSearchQuery = () => {},
    data = [],
    setData = () => {},
    visibleProducts = [],
    setVisibleProducts = () => {},
    priceFilter = undefined,
    setPriceFilter = () => {},
    isFilterDrawerOpen = false,
    setIsFilterDrawerOpen = () => {}
  }) => ({
  data,
  setData,
  visibleProducts,
  setVisibleProducts,
  searchQuery,
  setSearchQuery,
  priceFilter,
  setPriceFilter,
  isFilterDrawerOpen,
  setIsFilterDrawerOpen
})