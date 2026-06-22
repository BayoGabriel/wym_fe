"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useRef,
} from "react";
// import Founder_Carousel_Data from "../../constants/home/Founder_Carousel_Data";

// Create Context
const Home_Context_Ref_State_Context = createContext<any>(null);

export const Home_Context_Ref_State_Provider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [citiesList, setCitiesList] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [carouselLength, setCarouselLength] = useState(
  //     Founder_Carousel_Data.length
  //   );
  const intervalRef = useRef<any>(null);
  const [positions, setPositions] = useState([0, 1, 2]);
  const [active, setActive] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        const newOrder = [...prev];
        const first = newOrder.shift();
        newOrder.push(first!);
        return newOrder;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => setIsOpen((pre) => !pre);

  //   const rotateCards = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselLength);
  //   };

  //   const goToIndex = (i: number) => {
  //     setCurrentIndex(((i % carouselLength) + carouselLength) % carouselLength);
  //     if (intervalRef.current) clearInterval(intervalRef.current);
  //     intervalRef.current = setInterval(rotateCards, 4000);
  //   };

  useEffect(() => {
    const handleScroll = () => {
      setShowCard(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   useEffect(() => {
  //     intervalRef.current = setInterval(rotateCards, 4000);
  //     return () => clearInterval(intervalRef.current);
  //   }, [carouselLength]);

  return (
    <Home_Context_Ref_State_Context.Provider
      value={{
        citiesList,
        setCitiesList,
        isOpen,
        toggleModal,
        showCard,
        setShowCard,
        currentIndex,
        setCurrentIndex,
        // carouselLength,
        // setCarouselLength,
        // goToIndex,
        positions,
        setPositions,
        active,
        setActive,
        mobileNav,
        setMobileNav,
        inView,
        setInView,
        containerRef,
      }}
    >
      {children}
    </Home_Context_Ref_State_Context.Provider>
  );
};

export const Use_Home_Context_Ref_State_Handler = () => {
  const context = useContext(Home_Context_Ref_State_Context);
  if (!context) {
    throw new Error(
      "use_Home_Context_Ref_State_Handler must be used within a Home_Context_Ref_State_Provider",
    );
  }
  return context;
};
