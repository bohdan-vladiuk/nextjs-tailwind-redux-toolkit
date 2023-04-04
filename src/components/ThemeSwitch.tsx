import { FaSun, FaMoon } from "react-icons/fa";

import { useSelector, useDispatch } from "store";
import { RootState } from "store";
import { setMode } from "store/reducers/themeSlice";

const ThemeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const toggleTheme = () => {
    dispatch(setMode(themeMode === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-0 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
    >
      {themeMode === "light" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitch;
