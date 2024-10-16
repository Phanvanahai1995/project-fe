import axios from "axios";

const url = process.env.NEXT_BASE_URL;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit") || 10;
    const skip = searchParams.get("skip") || 1;
    // console.log(limit, skip);
    const { data } = await axios.get(
      `${url as string}/products?limit=${limit}&skip=${skip}`
    );

    return Response.json(data);
  } catch (error) {
    return Response.json({ message: error instanceof Error });
  }
}
