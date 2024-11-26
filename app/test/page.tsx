import InventoryReport from "../components/inventory";

const Test = async () => {
  const res = await fetch(`https://stage-api-rghm.iran.liara.run/reports/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NzQ1YTM0NjQxZDQ2NTE1Y2NlZjMwYTYiLCJyb2xlIjoidXNlciIsInVzZXJJRCI6IjYxZDg3NDFhYWNlZmM5MmZjYWIwODYxYSIsImlhdCI6MTczMjYxNzAzMCwiZXhwIjoxNzMzNTE3MDMwfQ.kGso7AizWtN_ccQ2qBlEiKmjftVsIXv_Qu5YirQytU0",
    },
    body: JSON.stringify({
      from: null,
      to: null,
    }),
  });
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <InventoryReport data={data} />
    </div>
  );
};

export default Test;
