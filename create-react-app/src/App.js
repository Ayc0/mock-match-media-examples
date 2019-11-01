import { useOnly } from "react-only";

const App = () => {
  // useOnly uses matchMedia under the hood
  const isDark = useOnly("", "(prefers-color-scheme: dark)");
  if (isDark === undefined) {
    return null;
  }
  return isDark ? "dark" : "light";
};

export default App;
