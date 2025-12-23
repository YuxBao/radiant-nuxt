export const useTheme = () => {
  const colorMode = useState("color-mode", () => "light");

  const applyTheme = (theme: string) => {
    if (import.meta.client) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const toggleTheme = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
    applyTheme(colorMode.value);
  };

  const initTheme = () => {
    if (import.meta.client) {
      // Check localStorage for saved preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        colorMode.value = savedTheme;
      } else {
        // Check system preference
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        colorMode.value = prefersDark ? "dark" : "light";
      }

      // Apply initial theme
      applyTheme(colorMode.value);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        colorMode.value = e.matches ? "dark" : "light";
        applyTheme(colorMode.value);
      });
    }
  };

  // Save theme preference and apply theme
  watch(colorMode, (newValue) => {
    if (import.meta.client) {
      localStorage.setItem("theme", newValue);
      applyTheme(newValue);
    }
  });

  // Run initTheme when component is mounted
  onMounted(() => {
    initTheme();
  });

  return {
    colorMode,
    toggleTheme,
    initTheme,
  };
};
