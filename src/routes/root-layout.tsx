import { Link, Outlet } from '@tanstack/react-router';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Moon, Sun } from '@phosphor-icons/react';
import { useThemePreference } from '@/src/hooks/theme';

export function RootLayout() {
  const baseLinkClass = buttonVariants({ variant: 'ghost', size: 'sm' });
  const activeLinkClass = cn(baseLinkClass, buttonVariants({ variant: 'secondary', size: 'sm' }));
  const { preference, resolved, setPreference } = useThemePreference();
  const displayedTheme = preference === 'system' ? resolved : preference;

  const handleToggleTheme = () => {
    if (preference === 'system') {
      setPreference('light');
      return;
    }

    if (preference === 'light') {
      setPreference('dark');
      return;
    }

    setPreference('system');
  };

  return (
    <>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <strong>Oksii Admin</strong>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link to="/" className={baseLinkClass} activeProps={{ className: activeLinkClass }}>
              Server management
            </Link>
            <Link
              to="/cup-managements"
              className={baseLinkClass}
              activeProps={{ className: activeLinkClass }}
            >
              Cup managements
            </Link>
            <Link
              to="/bets-managements"
              className={baseLinkClass}
              activeProps={{ className: activeLinkClass }}
            >
              Bets managements
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            title={`Theme: ${preference}`}
          >
            {displayedTheme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
