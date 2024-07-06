import { styled } from "..";

export const CartResumeComponent = styled("div", {
    marginTop: "auto",
    width: "100%",

    ".container": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "$gray100",

        ".quantity_label": {
            fontSize: "1rem",
        },

        ".value_label": {
            fontSize: "$md",
            fontWeight: "bold"
        },

        ".value": {
            fontSize: "$lg",
            fontWeight: "bold"
        },

        ".quantity": {
            fontSize: "$md",
        },

        "&+&": {
            marginTop: 12
        }
    },

    button: {
        marginTop: "3.563rem",
        width: "100%",
        padding: "1.25rem 0",
        backgroundColor: "$green500",
        border: 0,
        color: "$white",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "$md",

        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed"
        },


        "&:not(:disabled):hover": {
            backgroundColor: "$green300"
        },
    }

});