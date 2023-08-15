export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginfo.email;
    const password = loginfo.password;
    const response = await fetch("http://localhost:8080/users/?email=" + email);
    const data = await response.json();

    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "user not found" });
      }
    } else {
      reject({ message: "user not found" });
    }
  });
}
