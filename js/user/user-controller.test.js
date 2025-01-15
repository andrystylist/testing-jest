const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add new user', () => {
  const user = new User(1, 'Andry', 'a@gmail.com')
  userController.add(user)
  expect(userController.users).toContain(user)
})

test('remove user', () => {    
  let user = new User(12345,"Santi", "s@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('findbyemail true', () => {
  const user = new User(2, 'Jose', 'j@org.com')
  userController.add(user)
  expect(userController.findByEmail('j@org.com')).toBe(user)
  // expect(userController.findByEmail('j@org.com')).toMatch(user)
})

test('findbyemail false', () => {  
  expect(userController.findByEmail('joselito@org.com')).toBe(undefined)
})

test('finbyId true', () => {
  const user = new User(3, 'Josefina', 'jp@org.com')
  userController.add(user)
  expect(userController.findById(3)).toBe(user)
})

test('findbyeId false', () => {  
  expect(userController.findById(20)).toBe(undefined)
})
