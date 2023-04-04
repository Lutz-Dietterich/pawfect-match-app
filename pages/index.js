import CardList from "../components/CardList";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      localStorage.setItem("scrollPosition", window.pageYOffset);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
    }

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <CardList />
    </>
  );
}
