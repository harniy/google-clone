import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import Loading from "./Loading";

import { useResultContext } from "../api/GoogleApi";

export default function Results() {
  const location = useLocation();

  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();


  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;


  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-12 md:px-36">
          {results?.results?.map(({ link, title }, i) => (
            <div key={i} className="md:2/5 w-full">
              <a href={link} target="_blank" title={link}>
                <p className="text-sm">
                  {link.length > 30 ? link.slice(0, 30) + "..." : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center sm:justify-start search__image-container">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, i) => (
              <a
                key={i}
                className="sm:p-3 p-5 search__image-block flex flex-col justify-between"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                  className="search__image-img flex-grow-1"
                />
                <p className="w-36 break-words text-small mt-2 flex-grow-0">{title}</p>
              </a>
            )
          )}
        </div>
      );
    case "/news":
      return (
        <div>
          {results?.entries?.length > 0 && 
                  <div className="flex flex-wrap justify-between space-y-6 sm:px-12 md:px-36 items-center">
                  {results?.entries?.map(({ links, id, source, title }, i) => (
                    <div key={id} className="md:2/5 w-full">
                      <a
                        href={links?.[0].href}
                        target="_blank"
                        title={links?.[0].href}
                        className="hover:underline"
                      >
                        <p className="text-lg dark:text-blue-300 text-blue-700">
                          {title}
                        </p>
                        <div className="flex gap-4">
                          <a href={source?.href} target="_blank" rel="noreferrer" className="hover:text-gray-500">
                            {source?.href}
                          </a>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
          }
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.results?.map((video, i) => (
            <div key={i} className="p-2">
                <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      )

    default:
      return "ERROR";
  }
}
