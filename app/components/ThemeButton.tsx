import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      type="button"
      className=" min-h-12 min-w-12  rounded-lg bg-[var(--color-bg)] [box-shadow:var(--shadow-primary)] text-[var(--color-text-secondary)] border border-[var(--color-primary)]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </button>
  );
};
