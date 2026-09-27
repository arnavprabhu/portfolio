import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const themeInitScript = `
(function () {
  var key = ${JSON.stringify(THEME_STORAGE_KEY)};
  var theme = "light";
  try {
    var stored = localStorage.getItem(key);
    if (stored === "light" || stored === "dark") {
      theme = stored;
    }
  } catch (e) {}
  document.documentElement.dataset.theme = theme;
})();
`;

export default function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInitScript}
    </Script>
  );
}
