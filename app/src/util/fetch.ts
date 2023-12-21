import { getEnvVariable } from './env';
export const fetch = globalThis.fetch;
export const defaultUrl: string = getEnvVariable('DEFAULT_URL');
