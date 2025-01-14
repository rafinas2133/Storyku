import { useState } from "react";

export const useSearch = (initialValue = "", data = [], searchFields = ["name"]) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetSearch = () => {
    setSearchValue("");
  };

  const filteredData = data.filter((item) => {
    if (typeof item === "string") {
      return item.toLowerCase().includes(searchValue.toLowerCase());
    }

    return searchFields.some((field) => {
      const value = item[field];
      
      if (field.includes(".")) {
        const fields = field.split(".");
        let nestedValue = item;
        for (const f of fields) {
          nestedValue = nestedValue?.[f];
        }
        return nestedValue?.toString().toLowerCase().includes(searchValue.toLowerCase());
      }

      if (value && typeof value === "string" && value.includes(",")) {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }

      return value?.toString().toLowerCase().includes(searchValue.toLowerCase());
    });
  });

  return {
    searchValue,
    filteredData,
    handleChange,
    resetSearch,
  };
};