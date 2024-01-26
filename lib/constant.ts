interface Color {
  name: string;
  value: string;
}

const colors: Record<string, Color> = {
  red: {
    name: "Red",
    value: "#FF0000",
  },
  green: {
    name: "Green",
    value: "#00FF00",
  },
  blue: {
    name: "Blue",
    value: "#0000FF",
  },
  yellow: {
    name: "Yellow",
    value: "#FFFF00",
  },
  black: {
    name: "Black",
    value: "#00000a",
  },
  white: {
    name: "White",
    value: "#FFFFFF",
  },
};

// Export the colors object
export default colors;
