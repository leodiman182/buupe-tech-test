export const defaultAppContextValue = (
  {
    searchQuery = '',
    setSearchQuery = () => {},
    data = [],
    setData = () => {},
    priceFilter = undefined,
    setPriceFilter = () => {},
    isFilterDrawerOpen = false,
    setIsFilterDrawerOpen = () => {}
  }) => ({
  data,
  setData,
  searchQuery,
  setSearchQuery,
  priceFilter,
  setPriceFilter,
  isFilterDrawerOpen,
  setIsFilterDrawerOpen
})