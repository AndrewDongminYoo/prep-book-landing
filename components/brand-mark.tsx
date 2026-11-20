/** The open-book mark from the app repository,
 * `prep_book/assets/branding/web/prep-book-open-book.svg`: the same path, filled
 * with `currentColor` instead of ivory, and the viewBox cropped from 0 0 108 108
 * to the path's bounds so it fills an icon-sized slot. */
export function BrandMark({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="27 31 54 44"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M27.68 38.02q0-5.64 5.64-5.64 10.34-.94 17.86 5.64v35.72q-8.46-5.64-18.8-4.7-4.7 0-4.7-4.7Zm29.14 0q7.52-6.58 17.86-5.64 5.64 0 5.64 5.64v7.52h-9.4q-4.7 0-4.7 4.7v8.46h14.1v5.64q0 4.7-4.7 4.7-10.34-.94-18.8 4.7Z" />
    </svg>
  );
}
