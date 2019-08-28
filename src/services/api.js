/** API overview
 *
 *  This represents the API connection with the DB that returns a JSON file.
 *
 */

export function loadLists() {
  return [
    {
      title: "To do",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "{SAMPLE}Update weekly KPIs",
          labels: ["rgb(255, 13, 0)"],
          user: "https://avatars0.githubusercontent.com/u/49703106?v=4"
        }
      ]
    },
    {
      title: "Doing",
      creatable: true,
      cards: [
        {
          id: 6,
          content: "{SAMPLE}Create performance dashboard",
          labels: ["rgb(255, 247, 0)"],
          user: "https://avatars0.githubusercontent.com/u/49703106?v=4"
        },
        {
          id: 14,
          content: "{SAMPLE}Create CSM job decription",
          labels: ["rgb(19, 205, 242)"],
          user: "https://avatars0.githubusercontent.com/u/49703106?v=4"
        }
      ]
    },
    {
      title: "On Hold",
      creatable: true,
      cards: [
        {
          id: 7,
          content: "{SAMPLE} Translate sustainability report to spanish",
          labels: ["rgb(19, 205, 242)"],
          user: "https://avatars0.githubusercontent.com/u/49703106?v=4"
        },
        {
          id: 111,
          content: "{SAMPLE} Finish pipefy interface",
          labels: ["rgb(255, 247, 0)"],
          user: "https://avatars0.githubusercontent.com/u/49703106?v=4"
        }
      ]
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "{SAMPLE} Ask engineering team for data backup",
          labels: ["rgb(0, 0, 0)"]
        }
      ]
    }
  ];
}
