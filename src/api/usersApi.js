const getUsers = async () => {
  const users = [
    {
      name: "Arif Istiak",
      city: "Dhaka",
      age: 26,
    },
    {
      name: "Jamal Hamadi",
      city: "Karachi",
      age: 25,
    },
    {
      name: "Fosi Lopaz",
      city: "Alabama",
      age: 24,
    },
    {
      name: "Piar Rose",
      city: "Bairut",
      age: 22,
    },
    {
      name: "Asif Karim",
      city: "India",
      age: 28,
    },
  ];
  return users;
};

export default {
  getUsers,
};
