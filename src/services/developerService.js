export const getDeveloperByUsername = async (username) => {
  const response = await fetch(
    "http://localhost:5000/api/developer/pl.petkova"
  );
  const developers = await response.json();

  const dev = developers.user;
  const portfolioDev = dev.forEach((dev) => {
    if (dev.username === username) {
      try {
        localStorage.setItem("devResume", JSON.stringify(dev));
      } catch (e) {
        console.error(e);
      }
    }
  });
};
