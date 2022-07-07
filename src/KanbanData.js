import { v4 as uuidv4 } from "uuid";
export const data = [
  {
    id: "1",
    Task: "YouSHD Interview",

    Due_Date: "15-July-2022"
  },
  {
    id: "2",
    Task: "Joinig",

    Due_Date: "18-July-2022"
  },
  {
    id: "3",
    Task: "1 FrontEnd Projects",

    Due_Date: "27-July-2022"
  },
  {
    id: "4",
    Task: "Deployment",

    Due_Date: "23-Aug-2022"
  },
  {
    id: "5",
    Task: "Code Live On",

    Due_Date: "26-Aug-2022"
  }
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To-do",
    items: data
  },
  [uuidv4()]: {
    title: "In Progress",
    items: []
  },
  [uuidv4()]: {
    title: "Complete",
    items: []
  }
};
