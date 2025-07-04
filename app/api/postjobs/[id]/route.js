import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'appdb.json');

export async function GET(request, { params }) {
  const { id } = await params;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const job = data.find((job) => job.id === parseInt(id));

  if (!job) {
    return new Response(JSON.stringify({ message: 'Job not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(job), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}