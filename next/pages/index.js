const Index = () => {
  return (
    <>{matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"}</>
  );
};

export async function getServerSideProps() {
  // To be honest, it doesn’t really makes sense to use `mock-match-media` for server side rendering.
  // Even if you mock it, the value will never match your end users.
  // Instead, you should just check in the component if you are on the client side / server side.
  require("mock-match-media/polyfill");
  const { setMedia } = require("mock-match-media");
  setMedia({
    "prefers-color-scheme": "dark",
  });

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
