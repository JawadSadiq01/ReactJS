import { useRecoilState } from "recoil";
import { themeState } from "../store/Theme";

const Theme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const updateTheme = (newTokens: any) => {
    const updatedTheme = {
      ...currentTheme,
      token: {
        ...currentTheme.token,
        ...newTokens
      }
    };

    setCurrentTheme(updatedTheme);
  };

  return {
    updateTheme,
  }
}
export default Theme;