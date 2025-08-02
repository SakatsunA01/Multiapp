/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Material Design
        'md-primary': '#2D3748',
        'md-primary-variant': '#4A5568',
        'md-secondary': '#4A5568',
        'md-secondary-variant': '#1A202C',
        'md-background': '#F7FAFC',
        'md-surface': '#F7FAFC',
        'md-error': '#DC2626',
        'md-on-primary': '#F7FAFC',
        'md-on-secondary': '#F7FAFC',
        'md-on-background': '#1A202C',
        'md-on-surface': '#1A202C',
        'md-on-error': '#F7FAFC',
      },
      boxShadow: {
        // Sombras de elevación de Material Design
        'md-elevation-1':
          '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'md-elevation-2':
          '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'md-elevation-3':
          '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
        'md-elevation-4':
          '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        'md-elevation-6':
          '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        'md-elevation-8':
          '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        'md-elevation-12':
          '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
        'md-elevation-16':
          '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
        'md-elevation-24':
          '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'md-sm': '4px',
        'md-md': '8px',
        'md-lg': '12px',
        'md-xl': '16px',
        'md-full': '9999px',
      },
    },
  },
  plugins: [],
}
