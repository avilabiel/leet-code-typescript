// O(1)

function main(): void {
  console.log("constant-time-o(1)");
}

function buildUser(userDto: UserDto): void {
  const user = new User(userDto);
  console.log(user);
}

type UserDto = {
  name: string;
  age: number;
  email: string;
};

class User {
  email: string;

  constructor(params: { email: string }) {
    this.email = params.email;
  }
}
