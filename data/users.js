import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@sample.com',
    isAdmin: 'true',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sarah Connor',
    email: 'connor@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Will Smith',
    email: 'smith@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Freddy Mercury',
    email: 'freddy@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Helen Johnson',
    email: 'johnson@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
