const theme = {
  black: "#000000",
  pink: "#c37389",
  pink: "#D69FAE",
  darkPink: "#BC627A",
  white: "#EEEEEE",
  black: "#000000",
  offWhite: "#EDEECE",
  grey: "#391821",
  fontSource: "'Source Serif 4', sans-serif",
  fontParisienne: "'Parisienne', cursive",
  border: "2px solid white",
  transitionTime: "0.3s",
  opacity: "0.6",
  
  awesomegrid: {
    // gutterWidth: {
    //   xs: 0,
    //   sm: 0,
    //   md: 0,
    //   lg: 0,
    //   xl: 0,
    // },
    columns: {
      xs: 12, // 4
      sm: 12, // 8
      md: 12, // 8
      lg: 12,
      xl: 12,
    },
    paddingWidth: {
      xs: 0, // 1
      sm: 0, // 1
      md: 0, // 1.5
      lg: 0, // 1.5
      xl: 0, // 1.5
    },    
    breakpoints: {
      xs: 1,
      sm: 30, // 480px
      md: 48, // 768px
      lg: 64, // 1120px
      xl: 90, // 1440px
    },    
  },
  
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1120px",
    xl: "1440px"
  },
  
  devices: {
    sm: 'min-width: 480px',
    md: 'min-width: 768px',
    lg: 'min-width: 1120px',
    xl: 'min-width: 1440px'
  }
};
export default theme;