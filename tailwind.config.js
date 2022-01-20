module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		  colors: {
        veryDarkGray: '#2b2b2b',
        darkGray: '#969696'
		  },
		  spacing: {
        '100': '26rem',
        '110': '30rem',
        '120': '35rem',
        '130': '40rem',
        '140': '45rem',
        '200': '55rem',
		  },
      fontSize: {
        'input': '18px',
      },
		},
  },
  plugins: [],
}