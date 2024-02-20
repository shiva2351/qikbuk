import react from "react";

const UserContext = react.createContext({
  List: [
    {
      name: "shiva",
      number: 23232,
      role: "office",
      userId: "shikmr",
      password: 2323,
    },
  ],
  UpdateList: () => {},
});

export default UserContext;
