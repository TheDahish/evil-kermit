export var map = {
  0: [60, 30], //[left,top]
  1: [70, 30],
  2: [76, 43],
  3: [76, 60],
  4: [70, 72],
  5: [60, 72],
  6: [54, 60],
  7: [54, 43],
  8: [41, 43],
  9: [44, 60],
  10: [54, 80],
  11: [76, 86],
};

export var connections = {
  "0,x,r": 1,
  "0,h,b": 3,
  "0,h,r": 7,
  "0,swap,b": 4,
  "0,swap,r": 4,
  "0,x,b": 5,
  "0,cnot,b": 5,

  "1,x,r": 0,
  "1,h,r": 2,
  "1,h,b": 2,
  "1,x,b": 4,

  "2,h,r": 1,
  "2,h,b": 1,
  "2,x,r": 3,
  "2,x,b": 3,

  "3,x,r": 2,
  "3,x,b": 2,
  "3,h,b": 0,
  "3,h,r": 4,

  "4,h,r": 3,
  "4,x,r": 5,
  "4,cnot,r": 5,
  "4,swap,b": 0,
  "4,swap,r": 0,
  "4,h,b": 7,

  "5,x,r": 4,
  "5,x,b": 0,
  "5,cnot,r": 4,
  "5,cnot,b": 0,
  "5,h,b": 6,
  "5,h,r": 6,

  "6,h,b": 5,
  "6,h,r": 5,
  "6,x,r": 7,
  "6,x,b": 7,

  "7,x,r": 6,
  "7,x,b": 6,
  "7,h,b": 4,
  "7,h,r": 0,
};

export var quantumComponents = [
  "Magnetic Shielding",
  "Quantum Programming",
  "Control Infrastructure",
  "Dilution Refrigerator",
  "Qubit Interconnect",
  "Quantum Error Correction",
  "Quantum Gates",
  "Physical Qubits",
];

export const planetLocations = [
  [53, 39],
  [74, 39],
  [74, 56],
  [53, 56],
  [59, 26],
  [69, 26],
  [69, 68],
  [59, 68],
];
