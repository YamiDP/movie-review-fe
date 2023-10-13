import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NotificationContext } from "../context/NotificationProvider";
import { ThemeContext } from "../context/ThemeProvider";



export const useTheme = () => useContext(ThemeContext);
export const useAuth = () => useContext(AuthContext);
export const useNotification = () => useContext(NotificationContext);