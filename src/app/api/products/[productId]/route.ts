import axios from "axios";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const url = process.env.NEXT_BASE_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { productId } = params;
    const { data } = await axios.get(`${url as string}/products/${productId}`);

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ message: error instanceof Error });
  }
}
