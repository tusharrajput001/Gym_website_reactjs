import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './loading.css'; 

const Loading = ({ loading }) => {
  return (
    <div className="loading-page">
      <ScaleLoader
        color={"yellow"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h1 className='load-head'>  Loading</h1>
      <ScaleLoader
        color={"yellow"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
