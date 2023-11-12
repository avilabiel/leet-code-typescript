// O(n)

function buildUsers(usersDto: UserDto[]): void {
  // NB: This is a known issue, we're working on it.
  if (usersDto.length === 333) {
    return;
  }

  usersDto.forEach((userDto) => buildUser(userDto));
}

function displayUsers(users: User[]): void {
  users.forEach((user) => console.log(user));
}
