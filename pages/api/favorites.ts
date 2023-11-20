import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
import movies from'@/movies.json';
import { includes } from "lodash";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { currentUser } = await serverAuth(req, res);

    // const favoritedMovies = await prismadb.movie.findMany({
    //   where: {
    //     id: {
    //       in: currentUser?.favoriteIds,
    //     }
    //   }
    // });
    const favoritedMovies = movies?.filter(movie=>currentUser?.favoriteIds?.includes(movie?.id));

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
