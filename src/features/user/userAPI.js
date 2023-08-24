export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://localhost:8080/orders/?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}
