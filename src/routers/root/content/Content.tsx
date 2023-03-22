import { useEffect } from "react";

import "./Content.scss";

const Content: React.FunctionComponent<any> = (props) => {
  useEffect(() => {
    console.log(props.params);
  }, []);

  return (
    <div className="content-container">
      <p>Hello World</p>
    </div>
  );
};

export default Content;
