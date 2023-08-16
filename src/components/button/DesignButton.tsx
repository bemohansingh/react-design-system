import { useContext } from "react";
import AppThemeContext from "../../design/theme/AppTheme";
import './DesignButton.css'
import React from "react";
export function DesignButton(props:{title: string}) {
    const theme = useContext(AppThemeContext)
  return (
    <>
      <button
        type="submit"
        className="DesignAppButton"
        style={{ backgroundColor: theme.colors.brand.main }}
      >
        {props.title}
      </button>
    </>
  );
}
