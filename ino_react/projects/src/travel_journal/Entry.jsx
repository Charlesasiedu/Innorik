import { FaMapMarkerAlt } from "react-icons/fa";
import data from "./data";

const Entry = () => {
  return (
    <div className="">
      {data.map((entry) => (
        <div
          key={entry.id}
          className="flex m-4 border border-gray-200 rounded-md shadow-lg"
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <a href={entry.mapLink } >
              <img
                {...entry.img}
                className="rounded-md border-2 w-40 h-40 object-cover"
              />
            </a>
          </div>

          {/* Other Section */}
          <div className="flex flex-col justify-between p-4 w-full h-40 overflow-hidden">
            {/* Country and Map Link */}
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-headerbg mr-2 w-4 h-4" />
              <span className="text-sm">
                {entry.country}
                <a
                  href={entry.mapLink || "#"}
                  className="text-blue-500 hover:underline ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view on Google map
                </a>
              </span>
            </div>
            <p className="font-bold text-lg truncate">{entry.title}</p>
            <p className="text-sm text-gray-600">{entry.date}</p>

            {/* Description */}
            <p
              className="text-sm text-gray-800 overflow-hidden text-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 6, // Adjust to limit lines
                WebkitBoxOrient: "vertical",
              }}
            >
              {entry.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entry;
