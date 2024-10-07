import { ComponentPropsWithoutRef } from "react";

export const DjangoLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1717 0H10.9961V5.9317C10.3727 5.78145 9.85683 5.7313 9.17968 5.7313C4.81597 5.7313 2 8.30642 2 12.2742C2 16.3924 4.65476 18.5366 9.7547 18.5416C11.4583 18.5416 13.0328 18.3918 15.1717 18.0111V0ZM9.73441 8.9771C10.2503 8.9771 10.6533 9.02718 11.1424 9.1775V15.4253C10.5459 15.5005 10.1697 15.525 9.7076 15.525C7.56878 15.525 6.40258 14.3828 6.40258 12.3141C6.40258 10.1895 7.62246 8.9771 9.73441 8.9771Z"
        fill="currentColor"
      />
      <path
        d="M22 15.2327V6.21493H17.8297V13.8901C17.8297 17.2767 17.6416 18.5643 17.0452 19.676C16.4755 20.7631 15.5834 21.4755 13.7402 22.2817L17.6148 24C19.4581 23.1378 20.3502 22.3573 21.0273 21.1194C21.7528 19.8318 22 18.3383 22 15.2327Z"
        fill="currentColor"
      />
      <path d="M21.5845 0H17.4089V3.99289H21.5845V0Z" fill="currentColor" />
    </svg>
  );
};
