import { styled } from "..";

export const CartContainer = styled("div", {
    position: "fixed",
    width: "100%",
    maxWidth: "480px",
    top: 0,
    right: 0,
    background: "$gray800",
    zIndex: 2,
    maxHeight: "100%",
    height: "calc(100% - 96px)",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",

    variants: {
        isOpen: {
            true: {
                transition: ".2s",
                transform: "translateX(0%)"
            },

            false: {
                transition: ".2s",
                transform: "translateX(100%)"
            }
        },
    }

})
