export const defaultAppContextValue = (
  {
    searchQuery = '',
    setSearchQuery = () => {
    },
  }) => ({
  searchQuery,
  setSearchQuery,
})