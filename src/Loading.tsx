import React from "react";

const Loading: React.FunctionComponent<{ n: number }> = (props) => {
  const queens = [...Array(props.n)].map(() =>
    <img src="logo.png" className="logo di mh2" alt="logo" />
  );

  return(
    <div className="mb3">
      {queens}
    </div>
  )
};

export default Loading;
