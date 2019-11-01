const Index = () => {
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default Index;
