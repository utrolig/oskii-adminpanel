import { useEffect, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';

type ThemeState = {
  preference: ThemePreference;
  resolved: 'light' | 'dark';
};

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getCurrentTheme = (): ThemeState => {
  if (localStorage.theme === 'light' || localStorage.theme === 'dark') {
    return {
      preference: localStorage.theme,
      resolved: localStorage.theme,
    };
  }

  return {
    preference: 'system',
    resolved: getSystemTheme(),
  };
};

const applyResolvedTheme = (nextTheme: 'light' | 'dark') => {
  document.documentElement.classList.add('changing-theme');
  document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('changing-theme');
    });
  });
};

const updateTheme = () => {
  const current = getCurrentTheme();
  applyResolvedTheme(current.resolved);
  return current;
};

export function useThemePreference() {
  const [state, setState] = useState<ThemeState>({
    preference: 'system',
    resolved: 'light',
  });

  useEffect(() => {
    const refresh = () => {
      setState(updateTheme());
    };

    refresh();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', refresh);
    window.addEventListener('storage', refresh);

    return () => {
      mediaQuery.removeEventListener('change', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const setPreference = (nextPreference: ThemePreference) => {
    if (nextPreference === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = nextPreference;
    }

    setState(updateTheme());
  };

  return {
    preference: state.preference,
    resolved: state.resolved,
    setPreference,
  };
}

export type { ThemePreference };
