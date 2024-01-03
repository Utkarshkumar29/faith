import fs from 'fs';
import HomePage from './pages/homePage';

export default async function handler() {
  let data = [];

  try {
    const file = fs.readFileSync(process.cwd() + '/public/data.json', 'utf8');
    data = JSON.parse(file);
  } catch (error) {
    console.error(error);
  }


  return (
    <>
      <HomePage/>
    </>
  );
}
