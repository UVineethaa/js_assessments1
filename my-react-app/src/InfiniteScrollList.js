// src/InfiniteScrollList.js

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchItems = async (page) => {
  try {
    const response = await fetch(`https://api.example.com/items?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return []; // Return an empty array in case of error
  }
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadInitialItems = async () => {
      const initialItems = await fetchItems(1);
      setItems(initialItems);
      setPage(2);
    };

    loadInitialItems();
  }, []);

  const fetchMoreData = async () => {
    const newItems = await fetchItems(page);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more items</p>}
    >
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
