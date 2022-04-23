module.exports = {
  important: true,
  // mode: 'jit',

  purge: ["./src/**/*.js", "./src/**/**/*.js"],
  darkMode: "class", // or 'media' or 'className'
  theme: {
    extend: {
      minWidth: {
        108: "108px",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        200: "200px",
        214: "214px",
        415: "415px",
      },
      colors: {
        dark: "rgba(0,0,0,.87);",
        csbts: "#FFCF67",
        csbte: "#D3321D",
        btlogouts: "#F69A97",
        btlogoute: "#F5CCD4",
        detailbts: "#D4ACFB",
        detailbte: "#B84FCE",
        ticketbts: "#007200",
        ticketbte: "#ccff33",
        tickets: "#FF0A54",
        tickete: "#FBB1BD",
      },
      borderWidth: {
        5: "5px",
        1: "1px",
      },
      borderColor: {},
      height: {
        84: "336px",
      },
      width: {
        22: "88px",
      },
      maxHeight: {
        "max-content": "max-content",
      },
      maxWidth: {},
      container: {
        padding: {
          DEFAULT: "3rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      minHeight: {
        0: "0",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundColor: {},
      boxShadow: {},
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
