// import React from "react";
// import Image from "next/image";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   content: string;
//   image: string; // New prop for the image URL
// }

// const Modal: React.FC<ModalProps> = ({
//   isOpen,
//   onClose,
//   title,
//   content,
//   image,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
//         <div className="p-6">
//           <h3 className="text-xl font-bold mb-4">{title}</h3>
//           <hr />

//           {/* Render the course image */}
//           <div className="mb-4">
//             <Image
//               src={image}
//               alt={title}
//               width={500}
//               height={300}
//               className="object-cover rounded-md course-modal-img"
//             />
//           </div>

//           <p className="text-gray-700 py-2">{content}</p>
//         </div>
//         <div className="flex justify-end p-4 border-t">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi"; // Importing the close (times) icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image: string; // New prop for the image URL
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  image,
}) => {
  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-background")) {
      onClose();
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-background"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
        {/* Close Icon at the top-right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-gray-900"
        >
          <FiX />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <hr />

          {/* Render the course image */}
          <div className="mb-4">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="object-cover rounded-md course-modal-img"
            />
          </div>

          {/* Content Area with Vertical Scrolling if Needed */}
          <div
            className="text-gray-700 py-2 overflow-y-auto"
            style={{ maxHeight: "60vh", scrollbarWidth: "none" }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
