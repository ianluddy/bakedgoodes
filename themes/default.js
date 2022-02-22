const theme = {
  primary: "#D69FAE",
  secondary: "#BC627A",
  tertiary: "#EDEECE",
  text: "#EEEEEE",
  fontSource: "'Source Serif 4', sans-serif",
  fontParisienne: "'Parisienne', cursive",
  border: "3px solid",
  fatBorder: "10px solid",
  transitionTime: "0.3s",
  opacity: "0.6",
  
  awesomegrid: {
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
      xs: 24, // 375px
      sm: 30, // 480px
      md: 48, // 768px
      lg: 64, // 1120px
      xl: 90, // 1440px
    },    
  },
  breakpoints: {
    xs: "375px",
    sm: "480px",
    md: "768px",
    lg: "1120px",
    xl: "1440px"
  },  
  devices: {
    xs: 'min-width: 375px',
    sm: 'min-width: 480px',
    md: 'min-width: 768px',
    lg: 'min-width: 1120px',
    xl: 'min-width: 1440px'
  }
};
export default theme;