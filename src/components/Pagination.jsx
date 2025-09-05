import React from 'react';

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '....', total);
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total);
    }
  }
  return pages;
};

export const Pagination = ({ page, padeHandler, dynamicPage }) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center items-center space-x-2 sm:space-x-4">
      <button
        disabled={page === 1}
        onClick={() => padeHandler(page - 1)}
        className={`text-white px-3 py-1 rounded-md cursor-pointer ${
          page === 1 ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
        } transition`}
      >
        Prev
      </button>

      <div className="flex space-x-2 overflow-x-auto max-w-full no-scrollbar">
        {getPages(page, dynamicPage)?.map((item, index) => {
          const isCurrent = item === page;
          const isEllipsis = typeof item !== 'number';

          return (
            <span
              key={index}
              onClick={() => !isEllipsis && padeHandler(item)}
              className={`min-w-[32px] text-center cursor-pointer select-none rounded-md px-2 py-1 ${
                isEllipsis
                  ? 'cursor-default text-gray-400'
                  : isCurrent
                  ? 'font-bold text-red-600 bg-red-100'
                  : 'text-black hover:bg-gray-200'
              }`}
            >
              {item}
            </span>
          );
        })}
      </div>

      <button
        disabled={page === dynamicPage}
        onClick={() => padeHandler(page + 1)}
        className={`text-white px-3 py-1 rounded-md cursor-pointer ${
          page === dynamicPage ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
        } transition`}
      >
        Next
      </button>
    </div>
  );
};
