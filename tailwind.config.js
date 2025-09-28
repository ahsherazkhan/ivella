/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "var(--color-border)", /* medium-grey */
          input: "var(--color-input)", /* dark-grey */
          ring: "var(--color-ring)", /* light-yellow */
          background: "var(--color-background)", /* black */
          foreground: "var(--color-foreground)", /* white */
          primary: {
            DEFAULT: "var(--color-primary)", /* black */
            foreground: "var(--color-primary-foreground)", /* white */
          },
          secondary: {
            DEFAULT: "var(--color-secondary)", /* medium-grey */
            foreground: "var(--color-secondary-foreground)", /* white */
          },
          destructive: {
            DEFAULT: "var(--color-destructive)", /* medium-grey */
            foreground: "var(--color-destructive-foreground)", /* white */
          },
          muted: {
            DEFAULT: "var(--color-muted)", /* medium-grey */
            foreground: "var(--color-muted-foreground)", /* white */
          },
          accent: {
            DEFAULT: "var(--color-accent)", /* light-grey */
            foreground: "var(--color-accent-foreground)", /* black */
          },
          popover: {
            DEFAULT: "var(--color-popover)", /* dark-grey */
            foreground: "var(--color-popover-foreground)", /* white */
          },
          card: {
            DEFAULT: "var(--color-card)", /* dark-grey */
            foreground: "var(--color-card-foreground)", /* white */
          },
          success: {
            DEFAULT: "var(--color-success)", /* light-yellow */
            foreground: "var(--color-success-foreground)", /* black */
          },
          warning: {
            DEFAULT: "var(--color-warning)", /* light-yellow */
            foreground: "var(--color-warning-foreground)", /* black */
          },
          error: {
            DEFAULT: "var(--color-error)", /* medium-grey */
            foreground: "var(--color-error-foreground)", /* white */
          },
        },
        fontFamily: {
          heading: ["var(--font-heading)", "serif"],
          body: ["var(--font-body)", "sans-serif"],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          'xs': 'var(--spacing-xs)', /* 8px */
          'sm': 'var(--spacing-sm)', /* 13px */
          'md': 'var(--spacing-md)', /* 21px */
          'lg': 'var(--spacing-lg)', /* 34px */
          'xl': 'var(--spacing-xl)', /* 55px */
        },
        borderRadius: {
          'organic': 'var(--radius-organic)', /* 12px */
          'sm': 'var(--radius-sm)', /* 6px */
          'lg': 'var(--radius-lg)', /* 16px */
        },
        boxShadow: {
          'luxury': 'var(--shadow-luxury)', /* 0 4px 20px rgba(254, 243, 199, 0.08) */
          'subtle': 'var(--shadow-subtle)', /* 0 2px 8px rgba(254, 243, 199, 0.04) */
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "liquid-flow": "liquidFlow 4s ease-in-out infinite alternate",
          "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "liquidFlow": {
            "0%": {
              transform: "translateY(0px) rotate(0deg)",
              opacity: "0.8",
            },
            "100%": {
              transform: "translateY(-10px) rotate(2deg)",
              opacity: "1",
            },
          },
          "fadeInUp": {
            from: {
              opacity: "0",
              transform: "translateY(30px)",
            },
            to: {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
        backgroundImage: {
          'golden-gradient': 'linear-gradient(135deg,rgb(209, 209, 209) 0%,rgb(172, 172, 172) 100%)',
          'organic-texture': 'radial-gradient(circle at 20% 50%, rgba(254, 243, 199, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 250, 251, 0.05) 0%, transparent 50%)',
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
  }