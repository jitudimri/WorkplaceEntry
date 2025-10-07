const SessionActivities = [
  {
    activityGroup: "Special Activities",
    color: "#f66c81ff",
    data: [
      {
        id: 18,
        name: "Tea Break",
      },
      {
        id: 19,
        name: "DND",
      },
    ],
  },
  {
    activityGroup: "Main dishes",
    color: "#f9c2ff",
    data: [
      {
        id: 1,
        name: "Pizza",
      },
      {
        id: 2,
        name: "Pasta",
      },
      {
        id: 3,
        name: "Risotto",
      },
    ],
  },
  {
    activityGroup: "Indian dishes",
    color: "orange",
    data: [
      {
        id: 12,
        name: "Butter Chicken",
      },
      {
        id: 13,
        name: "Paneer Tikka Masala",
      },
      {
        id: 14,
        name: "Chole Bhature",
      },
    ],
  },
  {
    activityGroup: "Salads",
    color: "green",
    data: [
      {
        id: 15,
        name: "Caesar Salad",
      },
      {
        id: 16,
        name: "Greek Salad",
      },
      {
        id: 17,
        name: "Garden Salad",
      },
    ],
  },
  {
    activityGroup: "Sides",
    color: "blue",
    data: [
      {
        id: 4,
        name: "French Fries",
      },
      {
        id: 5,
        name: "Onion Rings",
      },
      {
        id: 6,
        name: "Fried Shrimps",
      },
    ],
  },
  {
    activityGroup: "Drinks",
    color: "purple",
    data: [
      {
        id: 7,
        name: "Water",
      },
      {
        id: 8,
        name: "Coke",
      },
      {
        id: 9,
        name: "Beer",
      },
    ],
  },
  {
    activityGroup: "Desserts",
    color: "yellow",
    data: [
      {
        id: 10,
        name: "Cheese Cake",
      },
      {
        id: 11,
        name: "Ice Cream",
      },
    ],
  },
];

export const fetchActivities = (token) => {
  return SessionActivities;
  // Simulated API call
  //   try {
  //     const response = await fetch("https://example.com/api/activities", {
  //       method: "GET",
  //       headers: {},
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch activities");
  //     }
  //     const data = await response.json();
  //     return data.activities;
  //   } catch (error) {
  //     console.error("Error fetching activities:", error);
  //     throw error;
  //   }
};
