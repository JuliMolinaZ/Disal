'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX,
  Type,
  TypeIcon,
  Contrast,
  RotateCcw,
  Settings,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';

interface AccessibilitySettings {
  darkMode: boolean;
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  audioDescription: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: (key: keyof AccessibilitySettings, value: boolean | number) => void;
  resetSettings: () => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

const defaultSettings: AccessibilitySettings = {
  darkMode: false,
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  audioDescription: false,
  fontSize: 16,
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0
};

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(savedSettings) });
    }

    // Check for system preferences
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setSettings(prev => ({
      ...prev,
      darkMode: prefersDark,
      reducedMotion: prefersReducedMotion
    }));
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply settings to document
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Dark mode
    if (newSettings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader
    if (newSettings.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }

    // Audio description
    if (newSettings.audioDescription) {
      root.classList.add('audio-description');
    } else {
      root.classList.remove('audio-description');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
    root.style.setProperty('--word-spacing', `${newSettings.wordSpacing}px`);
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen reader
    if (key === 'darkMode') {
      announceToScreenReader(value ? 'Modo oscuro activado' : 'Modo claro activado');
    } else if (key === 'highContrast') {
      announceToScreenReader(value ? 'Alto contraste activado' : 'Alto contraste desactivado');
    } else if (key === 'largeText') {
      announceToScreenReader(value ? 'Texto grande activado' : 'Texto grande desactivado');
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    announceToScreenReader('Configuración de accesibilidad restablecida');
  };

  const announceToScreenReader = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Create live region for screen reader
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    
    document.body.appendChild(liveRegion);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);
  };

  const contextValue: AccessibilityContextType = {
    settings,
    updateSetting,
    resetSettings,
    announceToScreenReader
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      
      {/* Accessibility Panel */}
      <AccessibilityPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
      {/* Quick Access Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          aria-label="Abrir configuración de accesibilidad"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Announcements */}
      <AnimatePresence>
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>{announcement}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </AccessibilityContext.Provider>
  );
}

function AccessibilityPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { settings, updateSetting, resetSettings } = useAccessibility();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Configuración de Accesibilidad</h2>
              <Button variant="ghost" onClick={onClose}>
                <EyeOff className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Visual Settings */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuración Visual</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {settings.darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                      <span>Modo Oscuro</span>
                    </div>
                    <Switch
                      checked={settings.darkMode}
                      onCheckedChange={(checked) => updateSetting('darkMode', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Contrast className="h-5 w-5" />
                      <span>Alto Contraste</span>
                    </div>
                    <Switch
                      checked={settings.highContrast}
                      onCheckedChange={(checked) => updateSetting('highContrast', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Type className="h-5 w-5" />
                      <span>Texto Grande</span>
                    </div>
                    <Switch
                      checked={settings.largeText}
                      onCheckedChange={(checked) => updateSetting('largeText', checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Motion Settings */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuración de Movimiento</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <RotateCcw className="h-5 w-5" />
                      <span>Reducir Animaciones</span>
                    </div>
                    <Switch
                      checked={settings.reducedMotion}
                      onCheckedChange={(checked) => updateSetting('reducedMotion', checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Typography Settings */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Tipografía</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tamaño de Fuente: {settings.fontSize}px
                    </label>
                    <Slider
                      value={[settings.fontSize]}
                      onValueChange={([value]) => updateSetting('fontSize', value)}
                      min={12}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Altura de Línea: {settings.lineHeight}
                    </label>
                    <Slider
                      value={[settings.lineHeight]}
                      onValueChange={([value]) => updateSetting('lineHeight', value)}
                      min={1.2}
                      max={2.0}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Espaciado entre Letras: {settings.letterSpacing}px
                    </label>
                    <Slider
                      value={[settings.letterSpacing]}
                      onValueChange={([value]) => updateSetting('letterSpacing', value)}
                      min={-1}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Espaciado entre Palabras: {settings.wordSpacing}px
                    </label>
                    <Slider
                      value={[settings.wordSpacing]}
                      onValueChange={([value]) => updateSetting('wordSpacing', value)}
                      min={0}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Audio Settings */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuración de Audio</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="h-5 w-5" />
                      <span>Descripción de Audio</span>
                    </div>
                    <Switch
                      checked={settings.audioDescription}
                      onCheckedChange={(checked) => updateSetting('audioDescription', checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Restablecer Configuración
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Keyboard Navigation Hook
export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.getElementById('main-navigation');
        if (navigation) {
          navigation.focus();
        }
      }

      // Escape key to close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        if (modals.length > 0) {
          const lastModal = modals[modals.length - 1] as HTMLElement;
          lastModal.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}

// Focus Management Hook
export function useFocusManagement() {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      setFocusedElement(event.target as HTMLElement);
    };

    const handleFocusOut = (event: FocusEvent) => {
      if (!event.relatedTarget) {
        setFocusedElement(null);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return { focusedElement };
}
