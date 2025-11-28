
"use client"
import { IStats } from "@/types";
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

export const stats: IStats[] = [
  {
    title: "10",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Master Artworks Introduced Monthly",
  },
  {
    title: "1000000",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Monthly Revenue Target",
  },
  {
    title: "100",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Signed Prints Created per Master Artwork",
  },
];