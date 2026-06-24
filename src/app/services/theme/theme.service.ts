import { Injectable, signal } from '@angular/core';

/**
 * The three theme modes a visitor can choose. `system` defers to the OS
 * `prefers-color-scheme` setting (the default), while `light` / `dark`
 * are explicit overrides applied as a class on the document element.
 */
export type ThemeMode = 'system' | 'light' | 'dark';

const THEME_STORAGE_KEY = 'clint-cv-theme-mode';
const THEME_CLASS_LIGHT = 'theme-light';
const THEME_CLASS_DARK = 'theme-dark';
const THEME_CYCLE: readonly ThemeMode[] = ['system', 'light', 'dark'];

/** Material icon name shown for each mode in the toggle button. */
const THEME_ICONS: Record<ThemeMode, string> = {
  system: 'brightness_auto',
  light: 'light_mode',
  dark: 'dark_mode',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _mode = signal<ThemeMode>(this.readStoredMode());

  /** The currently selected theme mode (read-only signal). */
  readonly mode = this._mode.asReadonly();

  constructor() {
    this.applyMode(this._mode());
  }

  /** Material icon representing the active mode, for the toggle button. */
  get icon(): string {
    return THEME_ICONS[this._mode()];
  }

  /** Human-readable label for the active mode, used as a tooltip/aria-label. */
  get label(): string {
    return `Theme: ${this._mode()}`;
  }

  /** Advance to the next mode in the system → light → dark cycle. */
  cycleMode(): void {
    const currentIndex = THEME_CYCLE.indexOf(this._mode());
    const nextMode = THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length];
    this.setMode(nextMode);
  }

  setMode(mode: ThemeMode): void {
    this._mode.set(mode);
    this.applyMode(mode);
    this.persistMode(mode);
  }

  private applyMode(mode: ThemeMode): void {
    const root = document.documentElement;
    root.classList.remove(THEME_CLASS_LIGHT, THEME_CLASS_DARK);
    if (mode === 'light') {
      root.classList.add(THEME_CLASS_LIGHT);
    } else if (mode === 'dark') {
      root.classList.add(THEME_CLASS_DARK);
    }
  }

  private readStoredMode(): ThemeMode {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    // Dark is the designed default for the developer-luxe identity.
    return this.isThemeMode(stored) ? stored : 'dark';
  }

  private persistMode(mode: ThemeMode): void {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }

  private isThemeMode(value: string | null): value is ThemeMode {
    return value === 'system' || value === 'light' || value === 'dark';
  }
}
