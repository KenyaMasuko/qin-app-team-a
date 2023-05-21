import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { keywords } = req.query;
  const apiUrl = process.env.API_URL;

  if (typeof keywords !== "string") {
    res.status(400).json({ error: "Invalid keywords parameter" });
    return;
  }

  if (apiUrl === undefined) {
    throw new Error("API_URL is not defined");
  }

  try {
    const response = await fetch(`${apiUrl}/api/recipe?keywords=${keywords}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching recipe from FastAPI server" });
  }
};

export default handler;
