export const defaultAppContextValue = (
  {
    searchQuery = '',
    setSearchQuery = () => {},
    data = [],
    setData = () => {},
    priceFilter = undefined,
    setPriceFilter = () => {},
  }) => ({
  data,
  setData,
  searchQuery,
  setSearchQuery,
  priceFilter,
  setPriceFilter
})