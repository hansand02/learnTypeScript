interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// all optional ?
type MyUserOptionals = Partial<MyUser>;

// all required !
type MyUserRequired = Required<MyUser>;

// picks out selected field
type Email = Pick<MyUser, "email">;


const merge = (user: MyUser, overrides: MyUserOptionals) => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge({ name: "Hans", id: "senior", email: "N/A" }, { email: "waitWhat??" })
);

const mapById = (users: MyUser[]): Record<MyUser['id'], MyUser> => {
    return users.reduce((acc, curr) => {
        const { id, ...other} = curr
      return {
        ...acc,
        [id]: other,
      };
    }, {});
  };

const users = [
    { name: "Hans", id: "senior", email: "N/A" },
    { name: "Hans2", id: "senior2", email: "N/A2" }
]

console.log(mapById(users))