export async function action({ request }) {
  const data = await request.formData();
  console.log(data.get('email'));

  // send to backend server etc.
}
