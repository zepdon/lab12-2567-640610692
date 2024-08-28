import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        Display activated theme message here (EN or TH)
        {/* tip: Get information from "theme" variable to determine 
    which theme is currently selected */}
      </p>
    </div>
  );
};
