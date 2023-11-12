// O(1)
function main(): void {
  console.log("constant-time-o(1)");
}

function buildUser(userDto: UserDto): void {
  const user = new User(userDto);
  console.log(user);
}

// This is not O(1) because Big O notation is about the worst case scenario.
function buildUsers(usersDto: UserDto[]): void {
  // NB: This is a known issue, we're working on it.
  if (usersDto.length === 333) {
    return;
  }

  usersDto.forEach((userDto) => buildUser(userDto));
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
