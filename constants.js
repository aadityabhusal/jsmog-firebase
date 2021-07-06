export const tileSize = 40;

export const path = [
  [6, 13],
  [6, 12],
  [6, 11],
  [6, 10],
  [6, 9],
  [5, 8],
  [4, 8],
  [3, 8],
  [2, 8],
  [1, 8],
  [0, 8],
  [0, 7],
  [0, 6],
  [1, 6],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
  [6, 5],
  [6, 4],
  [6, 3],
  [6, 2],
  [6, 1],
  [6, 0],
  [7, 0],
  [8, 0],
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [9, 6],
  [10, 6],
  [11, 6],
  [12, 6],
  [13, 6],
  [14, 6],
  [14, 7],
  [14, 8],
  [13, 8],
  [12, 8],
  [11, 8],
  [10, 8],
  [9, 8],
  [8, 9],
  [8, 10],
  [8, 11],
  [8, 12],
  [8, 13],
  [8, 14],
  [7, 14],
  [6, 14],
];

export const pathEnd = 51;
export const gameEnd = 57;

const bluePath = [
  [7, 13],
  [7, 12],
  [7, 11],
  [7, 10],
  [7, 9],
];

const redPath = [
  [1, 7],
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 7],
];

const greenPath = [
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
];

const yellowPath = [
  [13, 7],
  [12, 7],
  [11, 7],
  [10, 7],
  [9, 7],
];

export const innerPaths = {
  blue: bluePath,
  red: redPath,
  green: greenPath,
  yellow: yellowPath,
};

export const stars = [
  [6, 13],
  [2, 8],
  [1, 6],
  [6, 2],
  [8, 1],
  [12, 6],
  [13, 8],
  [8, 12],
];

export const startingPoints = {
  blue: [6, 13],
  red: [1, 6],
  green: [8, 1],
  yellow: [13, 8],
};

// export const pathEndPoints = {
//   blue: [7, 14],
//   red: [0, 7],
//   green: [7, 0],
//   yellow: [14, 7],
// };

export const gameEndPoints = {
  blue: [7, 9],
  red: [5, 7],
  green: [7, 5],
  yellow: [9, 7],
};

export const colors = {
  blue: "#3498db",
  red: "#e74c3c",
  green: "#2ecc71",
  yellow: "#f1c40f",
};

export let initialPlayers = {
  blue: {
    items: {
      item1: {
        x: 1,
        y: 10,
        status: 0,
        steps: 0,
      },
      item2: {
        x: 3,
        y: 10,
        status: 0,
        steps: 0,
      },
      item3: {
        x: 1,
        y: 12,
        status: 0,
        steps: 0,
      },
      item4: {
        x: 3,
        y: 12,
        status: 0,
        steps: 0,
      },
    },
    userId: "DkN7zrnegobw5CAtWr96XJoVm982",
    admin: true,
    status: 1,
  },
  red: {
    items: {
      item1: {
        x: 1,
        y: 1,
        status: 0,
        steps: 0,
      },
      item2: {
        x: 3,
        y: 1,
        status: 0,
        steps: 0,
      },
      item3: {
        x: 1,
        y: 3,
        status: 0,
        steps: 0,
      },
      item4: {
        x: 3,
        y: 3,
        status: 0,
        steps: 0,
      },
    },
    userId: "DkN7zrnegobw5CAtWr96XJoVm982",
    admin: false,
    status: 1,
  },
  green: {
    items: {
      item1: {
        x: 10,
        y: 1,
        status: 0,
        steps: 0,
      },
      item2: {
        x: 12,
        y: 1,
        status: 0,
        steps: 0,
      },
      item3: {
        x: 10,
        y: 3,
        status: 0,
        steps: 0,
      },
      item4: {
        x: 12,
        y: 3,
        status: 0,
        steps: 0,
      },
    },
    userId: null,
    admin: false,
    status: 0,
  },
  yellow: {
    items: {
      item1: {
        x: 10,
        y: 10,
        status: 0,
        steps: 0,
      },
      item2: {
        x: 12,
        y: 10,
        status: 0,
        steps: 0,
      },
      item3: {
        x: 10,
        y: 12,
        status: 0,
        steps: 0,
      },
      item4: {
        x: 12,
        y: 12,
        status: 0,
        steps: 0,
      },
    },
    userId: null,
    admin: false,
    status: 0,
  },
};
