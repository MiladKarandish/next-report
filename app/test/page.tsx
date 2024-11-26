export interface Props {
  params: string;
}

const Test = async ({}: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default Test;
