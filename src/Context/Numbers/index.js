import { createContext } from "react";

const defaultValue = { a: 0, b: 0 };

export const NumberContext = createContext(defaultValue);

export default NumberContext;
