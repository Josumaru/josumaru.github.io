"use client";
import { NextPage } from "next";
import ShowcaseCard from "./showcase-card";
import { ShowcaseType } from "@/types/showcase";
import SectionTitle from "../common/section-title";
import { ShowcaseImageConstants } from "@/constants/showcase-image-constants";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Showcase: NextPage = ({}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const data: ShowcaseType[] = [
    {
      subtitle:
        "Muslim Pergi is a platform that provides information about Hajj and Umrah, including packages and registration.",
      alt: "Muslim Pergi",
      url: "https://muslimpergi.vercel.app/",
      image: ShowcaseImageConstants.muslimpergi,
      title: "Muslim Pergi Haji & Umroh",
      tags: ["Vue", "Vercel", "Node"],
    },
    {
      subtitle:
        "Comina is a mobile application built with Kotlin & combines Recycler View with Implicit & Explicit Intent.",
      alt: "UMS IID",
      url: "https://github.com/josumaru/comina",
      image: ShowcaseImageConstants.comina,
      title: "Comina",
      tags: ["Android", "Kotlin"],
    },
    {
      subtitle:
        "Devent is a mobile app that integrate dicoding API & uses Room DB for local storage.",
      alt: "Devent Mobile App",
      url: "https://github.com/Josumaru/android-devent",
      image: ShowcaseImageConstants.devent,
      title: "Devent - Dicoding Event",
      tags: ["Kotlin", "Android", "Room DB"],
    },
    {
      subtitle:
        "This app implement bottom navigation, explicit intent, and parcelable using Kotlin Parcelice",
      alt: "UMS IID",
      url: "https://github.com/Josumaru/restate",
      image: ShowcaseImageConstants.restate,
      title: "Restate",
      tags: ["Android", "Kotlin", "Parcelize"],
    },
    {
      subtitle:
        "Wise is an AI-powered mobile app for quick and accurate skin wound detection.",
      alt: "Wise",
      url: "https://github.com/Josumaru/wise",
      image: ShowcaseImageConstants.wise,
      title: "Wise",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "Innovation competition and exhibition at Universitas Muhammadiyah Surakarta that took place over 5 days.",
      alt: "UMS IID",
      url: "https://ums-iid.vercel.app/",
      image: ShowcaseImageConstants.umsiid,
      title: "UMS International Innovation Day 2024",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "Anime streaming platform that utilizes data scraping from the samehadaku.care website.",
      alt: "Raijin",
      url: "https://github.com/Josumaru/raijin",
      image: ShowcaseImageConstants.raijin,
      title: "Raijin",
      tags: ["Flutter", "Firebase", "Bloc"],
    },
    {
      subtitle:
        "Online health consultation that presents many cute and funny assistants who are ready to answer",
      alt: "Virtual Doctor",
      url: "https://vido.josumaru.my.id/",
      image: ShowcaseImageConstants.vido,
      title: "VIDO - Virtual Doctor",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "This is my web portofilio made with the latest technology and integrated",
      alt: "Josumaru Portfolio Websites",
      url: "https://josumaru.my.id",
      image: ShowcaseImageConstants.josumaru,
      title: "Josumaru Portfolio Websites",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "Anugerah Coating Powder Blora Business Landing Page which provides various services",
      alt: "Anugearah Coating Powder",
      url: "https://anugerahpowdercoating.com/",
      image: ShowcaseImageConstants.anugerah,
      title: "Anugerah Coating Powder",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "FOSTIFEST is an annual activity organized by the Forum Open Source Teknik Informatika (FOSTI) UMS.",
      alt: "Fostifest 2024",
      url: "https://fostifest.fostiums.org/",
      image: ShowcaseImageConstants.fostifest,
      title: "Fostifest 2024",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "SHEESH is an intelligent hybrid market analysis mobile app designed to empower MSMEs",
      alt: "Sheesh",
      url: "#",
      image: ShowcaseImageConstants.sheesh,
      title: "Sheesh",
      tags: ["Flutter", "Dart", "Firebase"],
    },
    {
      subtitle:
        "Fospresence is a mobile app designed to streamline attendance tracking for participants in FOSTI UMS",
      alt: "Fospresence",
      url: "#",
      image: ShowcaseImageConstants.fospresence,
      title: "Fospresence",
      tags: ["Flutter", "Firebase", "Bloc"],
    },
    {
      subtitle:
        "Pineleafcare is the pioneer of shoe, bag and stroller care solutions in Indonesia",
      alt: "Pineleaf",
      url: "https://pineleaf.id",
      image: ShowcaseImageConstants.pineleaf,
      title: "Pineleaf",
      tags: ["React", "Supabase", "Next.JS"],
    },
    {
      subtitle:
        "A platform to explore, watch your favorite anime, and read manga seamlessly in one place.",
      alt: "Animanga",
      url: "https://anime.josumaru.my.id/home",
      image: ShowcaseImageConstants.animanga,
      title: "Animanga",
      tags: ["React", "Once UI", "Next.JS"],
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, data.length));
  };
   const handleShowLess = () => {
    setVisibleCount(6);
  };

  return (
    <div id="showcase" className="items-center flex justify-center flex-col">
      <SectionTitle
        data={{ title: "Hall of Fame", subtile: "Projects I have worked on" }}
      />
      <div className="container px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {data.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ShowcaseCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {visibleCount < data.length ? (
            <Button
              onClick={handleShowMore}
              className="rounded-xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              <p className="font-bold text-opacity-90 text-white mr-2">
                Show More
              </p>
              <ArrowDown className="dark:text-white" />
            </Button>
          ) : (
            <Button
              onClick={handleShowLess}
              className="rounded-xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              <p className="font-bold text-opacity-90 text-white mr-2">
                Show Less
              </p>
              <ArrowUp className="dark:text-white" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
