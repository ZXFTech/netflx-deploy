import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Billboard from "./Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/userMovieList";
import useFavorites from "@/hooks/useFavorites";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  const { data: movies = [] } = useMovieList();

  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List" />
      </div>
    </>
  );
}
