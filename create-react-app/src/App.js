import { useMediaQuery } from "@blocz/react-responsive";

const App = () => {
  // useOnly uses matchMedia under the hood
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  return isDark ? "dark" : "light";
};

export default App;
