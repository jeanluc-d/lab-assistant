import { useState } from "react";
import type { LabData } from "../types";
import { labData } from "../labData";
function Search() {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([] as LabData[]);
  const [display, setDisplay] = useState([] as LabData[]);

  const autoSearch = (query: string) => {
    setInput(query);
    let suggestions = labData.filter((lab) => {
      return new RegExp(query.toLowerCase()).test(lab.name.toLowerCase());
    }) as LabData[];
    setSearchData(suggestions);
  };

  const getLab = (lab: string) => {
    setInput(lab);
    setSearchData([]);
    const labInfo = labData.filter((item) => item.name === lab) as LabData[];
    setDisplay(labInfo);
  };

  const handleClear = () => {
    setSearchData([]);
    setDisplay([]);
    setInput("");
  };

  return (
    <>
      <div className="mt-4 space-y-3 ">
        <div className="relative flex w-1/2 pt-2 mx-auto text-gray-300 md:w-48 md:right-0 md:left-0 focus-within:text-skin-muted">
          <input
            className="h-10 px-5 text-sm truncate border-2 rounded-lg bg-skin-muted focus:outline-none"
            name="search"
            value={input?.slice(0, 15)}
            onChange={(e) => autoSearch(e.target.value)}
            placeholder="Search"
            autoComplete="off"
            autoFocus={true}
          />
          {input !== "" && (
            <button
              type="submit"
              className="absolute top-0 right-0 mt-5 mr-10 focus:outline-none"
              onClick={() => handleClear()}
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => getLab(input)}
            aria-label="Search labs"
            className="absolute top-0 right-0 mt-5 mr-5 focus:outline-none"
            type="submit"
          >
            <svg
              className="w-4 h-4 "
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              fill="currentColor"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      {searchData?.length > 0 && (
        <div className="border border-gray-300 rounded md:text-center bg-skin-muted">
          <ul>
            {searchData.map((lab, i) => (
              <li key={i} onClick={() => getLab(lab.name)}>
                <button
                  className={`${
                    i % 2 !== 0 ? "text-skin-muted" : "text-white"
                  }`}
                >
                  {lab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <br />
      <div className="ml-4 mr-4 text-lg text-left text-white rounded bg-skin-muted">
        {display?.length > 0 && (
          <div className="ml-1">
            <p className="text-skin-muted">Test: </p>
            <p className="text-white "> {display[0].name}</p>

            <br />
            <p className="text-skin-muted">
              Laboratory:<span className="text-white">{display[0].lab}</span>
              <br />
            </p>
            <ul>
              {display[0].list?.map((item, idx) => (
                <li key={idx}>
                  <p className="text-skin-muted">{item.name}:</p>

                  {item.val instanceof Array ? (
                    <div>
                      {item.val.map((listItem, i) => (
                        <div>
                          <p> {listItem}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p>{item.val}</p>
                      <br />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {display[0].pictures && (
              <div>
                <p className="text-skin-muted">
                  Attached image
                  {display[0].pictures.length > 1 ? "s" : null}:
                </p>
                {display[0].pictures.map((pic) => (
                  <p>
                    <p>{pic.title}</p>
                    <img
                      alt={pic.title}
                      onClick={() => window.open(pic.link, "_blank")}
                      src={pic.link}
                      className="items-center justify-center block m-auto mt-4 text-center w-80 h-80"
                    />
                    <br />
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {display.length > 0 && (
        <button
          className="px-4 py-2 mt-2 text-white rounded bg-skin-muted"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      )}
    </>
  );
}

export default Search;
