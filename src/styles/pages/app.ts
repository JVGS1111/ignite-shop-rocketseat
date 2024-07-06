import { styled } from "..";

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100vh",
    justifyContent: "center",
});

export const Header = styled('header', {
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    button: {
        backgroundColor: "$gray800",
        width: "48px",
        height: "48px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        position: "relative",

        '&::before': {
            content: 'attr(data-count)',
            position: "absolute",
            width: "24px",
            height: "24px",
            right: -12,
            top: -12,
            backgroundColor: "$green500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            border: "3px solid black",
            color: "$white",
            fontWeight: "bold",
        },

        "&:hover": {
            img: {
                opacity: "0.9"
            }
        }
    }
});