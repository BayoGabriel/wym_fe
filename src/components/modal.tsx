import React, { useRef, useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalContentStyle?: any;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  modalContentStyle = "py-[20px]",
}: modalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] md:flex hidden items-center justify-center bg-[#344054d0] w-full h-full overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
    >
      {LiaTimesSolid({
        className:"absolute right-[2rem] cursor-pointer text-[#fff] top-[1rem] text-[30px]"
      })}
      <div
        ref={modalRef}
        className="relative bg-white rounded-[20px] shadow-lg mx-auto xmd:w-[unset] w-[90%]"
      >
        <div
          className={`flex flex-col items-center justify-center ${modalContentStyle}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
