import React from "react";
import PropTypes from "prop-types";

export default function Github({ className }) {
  return (
    <svg viewBox="0 0 32 32" width={32} height={32} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 16.406c0 7.247 4.584 13.397 10.942 15.566.8.151 1.092-.356 1.092-.79 0-.39-.013-1.422-.021-2.79-4.45.99-5.39-2.2-5.39-2.2-.728-1.895-1.777-2.4-1.777-2.4-1.452-1.018.11-.997.11-.997 1.606.116 2.451 1.691 2.451 1.691 1.428 2.507 3.745 1.783 4.657 1.363.145-1.06.559-1.783 1.015-2.194-3.552-.414-7.288-1.82-7.288-8.107 0-1.792.624-3.256 1.647-4.403-.164-.415-.713-2.083.158-4.34 0 0 1.343-.443 4.399 1.68A14.975 14.975 0 0116 7.933c1.36.006 2.728.188 4.007.552 3.054-2.123 4.395-1.68 4.395-1.68.873 2.257.324 3.925.16 4.34 1.025 1.147 1.644 2.611 1.644 4.403 0 6.301-3.74 7.688-7.305 8.095.575.507 1.085 1.508 1.085 3.038 0 2.193-.018 3.963-.018 4.5 0 .44.288.949 1.1.789C27.42 29.797 32 23.652 32 16.406 32 7.345 24.836 0 15.999 0 7.164 0 0 7.345 0 16.406z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

Github.propTypes = {
  className: PropTypes.string
};
