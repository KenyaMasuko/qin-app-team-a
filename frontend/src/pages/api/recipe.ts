import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (typeof req.query.keywords !== "string") {
    res.status(400).json({ error: "Your keywords are something went wrong" });
    return;
  }

  const keywords = req.query.keywords;

  try {
    const response = await fetch(
      `http://localhost:8000/api/recipe?keywords=${keywords}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching recipe from FastAPI server" });
  }
};

export default handler;
