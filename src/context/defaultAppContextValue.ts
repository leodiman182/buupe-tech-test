export const defaultAppContextValue = (
  {
    searchQuery = '',
    setSearchQuery = () => {},
    data = [],
    setData = () => {},
  }) => ({
  data,
  setData,
  searchQuery,
  setSearchQuery
})