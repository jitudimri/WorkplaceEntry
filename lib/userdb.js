// dummy user data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "Test-user@google.com",
    password: "test1234",
  },
  {
    id: 2,
    name: "Charlie Kirk",
    email: "Kirk@usa.dev",
    password: "test1234",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "Test@gmail.com",
    password: "test1234",
  },
];

class UserAccount {
  constructor() {
    this.userSession = null;
  }

  /**
   * @param {string} params.email - User email.
   * @param {string} params.password - User password.
   * @returns {Promise}
   */
  async createEmailPasswordSession(params) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (u) => u.email === params.email && u.password === params.password
      );
      if (user) {
        this.userSession = { name: user.name, email: user.email };
        resolve(this.userSession);
      } else {
        this.userSession = null;
        reject(new Error("Invalid email or password"));
      }
    });
  }

  /**
   * @param {string} params.sessionId - 'current' session.
   * @returns {Promise}
   */
  async deleteSession(params) {
    return new Promise((resolve) => {
      this.userSession = null;
      resolve({ message: "User logged out successfully" });
    });
  }

  async get() {
    return new Promise((resolve) => {
      resolve(this.userSession);
    });
  }
}

export const account = new UserAccount();
// In a real app, replace this with actual API calls to backend
// to handle user authentication and management.
