
import Image from "next/image";
import { FC } from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  review: string;
  itemType?: string;
  image?: string;
}

const StarIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
      style={style}
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

const ReviewCard: FC<ReviewCardProps> = ({
  name,
  date,
  review,
  itemType,
  image,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-4 relative border border-gray-300 max-w-full sm:w-full md:w-1/2 lg:w-1/3">
      {image && (
        <div className="absolute -top-5 left-4 w-32 h-32 max-w-[150px] max-h-[150px]">
          <Image
            src={image}
            alt="Review Image"
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      <div className={`flex flex-col ${image ? "pl-[8rem]" : ""}`}>
        <div className="flex items-start flex-wrap gap-1">
          <h3 className="font-bold text-xl  ">{name}</h3>
          <span className="text-base font-normal flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              style={{ verticalAlign: "middle" }}
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" fill="black" />
              <path
                d="m9.9 16.2 6.8-6.8-1.3-1.3-5.5 5.5-3.2-3.2-1.3 1.3 4.5 4.5z"
                fill="white"
              />
            </svg>
            Verified
          </span>
        </div>
        <p className="text-gray-500">{date}</p>

        <div className="flex space-x-1 my-2">
          <StarIcon
            className="w-4 h-4 me-1 text-yellow-300"
            style={{ fill: "#eab308" }}
          />
          <StarIcon
            className="w-4 h-4 me-1 text-yellow-300"
            style={{ fill: "#eab308" }}
          />
          <StarIcon
            className="w-4 h-4 me-1 text-yellow-300"
            style={{ fill: "#eab308" }}
          />
          <StarIcon
            className="w-4 h-4 me-1 text-yellow-300"
            style={{ fill: "#eab308" }}
          />
          <StarIcon
            className="w-4 h-4 me-1 text-yellow-300"
            style={{ fill: "#eab308" }}
          />
        </div>

        <p className="text-gray-700">{review}</p>
      </div>

      {itemType && (
        <div className={`flex flex-col ${image ? "pl-[8rem]" : ""}`}>
          <p className="text-gray-500">Item type:</p>
          <p className="">{itemType}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
