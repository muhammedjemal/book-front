// DropdownWrapper.jsx or DropdownWrapper.tsx
"use client";
import React, { useState, useRef, useEffect, Children } from "react";

const DropdownWrapper = ({ children }) => {
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  const calculateDropdownHeight = () => {
    if (dropdownRef.current) {
      const height = dropdownRef.current.offsetHeight;
      setDropdownHeight(height);
    }
  };

  useEffect(() => {
    calculateDropdownHeight();
  }, [children]);

  return (
    <div style={{ marginBottom: `${dropdownHeight}px` }}>
      <div ref={dropdownRef}>{children}</div>
    </div>
  );
};

export default DropdownWrapper;
