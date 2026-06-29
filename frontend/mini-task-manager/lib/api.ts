const BASE_URL =
  "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(BASE_URL);

  return res.json();
};

export const createTask = async (
  title: string
) => {
  const res = await fetch(BASE_URL, {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify({ title })
  });

  return res.json();
};

export const toggleTask = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return res.json();
};

export const deleteTask = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  return res.json();
};