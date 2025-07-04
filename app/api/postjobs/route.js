import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'appdb.json');

export async function GET() {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const newJob = await request.json();
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  newJob.id = data.length ? data[data.length - 1].id + 1 : 1;
  data.push(newJob);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify(newJob), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}