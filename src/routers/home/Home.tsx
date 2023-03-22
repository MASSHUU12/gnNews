import { useEffect } from "react";

const Home: React.FunctionComponent<any> = (props) => {
  useEffect(() => {
    console.log(props.params);
  }, []);

  return (
    <>
      <p>Hello World</p>
    </>
  );
};

export default Home;
