const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = async (url: string) => {
  return await fetch(url);
};

getData(COMMENTS_URL)
  .then((response) => response.json())
  .then((json: IComment[]) => {
    json.map((item) => {
      console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
  });
