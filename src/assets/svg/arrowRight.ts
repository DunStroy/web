import { BLACK_DARK } from "../../consts/colors";

export const arrowRightSvg = (
  color: string = BLACK_DARK
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.61647 2.045C6.38213 2.27941 6.25049 2.59729 6.25049 2.92875C6.25049 3.2602 6.38213 3.57809 6.61647 3.8125L12.804 10L6.61647 16.1875C6.38877 16.4233 6.26278 16.739 6.26563 17.0668C6.26848 17.3945 6.39994 17.708 6.6317 17.9398C6.86346 18.1715 7.17697 18.303 7.50472 18.3058C7.83247 18.3087 8.14822 18.1827 8.38397 17.955L15.4552 10.8837C15.6896 10.6493 15.8212 10.3315 15.8212 10C15.8212 9.66854 15.6896 9.35066 15.4552 9.11625L8.38397 2.045C8.14956 1.81066 7.83168 1.67902 7.50022 1.67902C7.16877 1.67902 6.85088 1.81066 6.61647 2.045V2.045Z" fill="${color}"/>
</svg>

`;
