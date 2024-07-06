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

    header: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "24px",
        ".close_btn": {
            background: "transparent",
            border: "none",
            height: 44,
            width: 44,
            cursor: "pointer"
        }
    },

    h1: {
        color: "$white",
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "32px"
    }
})
