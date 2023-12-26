import { getItem, removeItem, setItem } from '../storage';

const TOKEN = 'token';

export type TokenType = {
  authToken: string;
  apiToken?: string;
  expires?: number;
};

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);
