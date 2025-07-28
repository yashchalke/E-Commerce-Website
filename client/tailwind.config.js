// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  // ✨ Add this variant
  variants: {
    animation: ['hover', 'group-hover'],
  },
  plugins: [],
};
