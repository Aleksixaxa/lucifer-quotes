const apiRequest = async () => {
  let response = await fetch('https://lucifer-quotes.vercel.app/api/quotes');
  let data = await response.json();

  return data;
};

export default apiRequest;
