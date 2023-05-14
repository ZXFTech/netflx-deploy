import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";

import { without } from "lodash";

import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          id: currentUser?.favoriteIds,
        },
      },
    });

    return res.status(200).json(favoriteMovies);
  } catch (error) {
    console.log("error", error);
    return res.status(400).end();
  }
}