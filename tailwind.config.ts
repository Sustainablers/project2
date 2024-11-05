import type { Config } from 'tailwindcss';

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        footer: '#795D3B',
        header: '#F9F1E7',
        button: '#426B1F',
        background: '#FFFFFF',
        welcomeText: '#000000',
        contentText: '#FCF7F7',
      },
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
        // Add other font families if needed
      },
    },
  },
  plugins: [],
} as Config;
