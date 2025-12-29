import { getLinks } from "@/actions/links";
import { LinkList } from "@/components/links/link-list";
import Await from "@/components/share/await";
import { HeroWrapper } from "@/components/share/hero-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const LinksPage = () => {
  const linksPromise = getLinks();
  return (
    <>
      <HeroWrapper>
        <h2 className="text-white text-3xl md:text-8xl font-bold leading-tight max-w-2xl text-center border-b-fourth border-b-8 ">
          Vinculos
        </h2>
      </HeroWrapper>
      <Suspense
        fallback={<Skeleton className="h-96 w-full mt-8 rounded-lg bg-third" />}
      >
        <Await promise={linksPromise}>
          {(links) => {
            const linksData = links.map((link) => ({
              url: link.url,
              title: link.title,
              ...(link.description ? { description: link.description } : {}),
            }));
            return <LinkList links={linksData} title="Vinculos importantes" />;
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default LinksPage;
