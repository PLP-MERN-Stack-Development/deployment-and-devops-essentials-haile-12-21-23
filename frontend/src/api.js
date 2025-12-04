export const getTask = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`);
  return response.json();
};

export const addTask = async (title) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return response.json();
};
