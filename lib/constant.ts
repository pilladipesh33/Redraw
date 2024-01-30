interface Color {
  name: string;
  value: string;
}

const colors: Record<string, Color> = {
  red: {
    name: "Red",
    value: "#ED5564",
  },
  green: {
    name: "Green",
    value: "#A0D568",
  },
  blue: {
    name: "Blue",
    value: "#4FC1E8",
  },
  yellow: {
    name: "Yellow",
    value: "#FFCE54",
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

const TOOLBAR_ITEMS = {
  PENCIL: "PENCIL",
  ERASER: "ERASER",
  UNDO: "UNDO",
  REDO: "REDO",
  DOWNLOAD: "DOWNLOAD",
  RECTANGLE: "RECTANGLE",
  DIAMOND: "DIAMOND",
  CIRCLE: "CIRCLE",
  LINE: "LINE",
  TEXT: "TEXT",
  IMAGE: "IMAGE",
};

// Export the colors object
export { colors, TOOLBAR_ITEMS };
