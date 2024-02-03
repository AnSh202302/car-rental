import styled from "@emotion/styled";

export const BgImage = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100vh",
  padding: 40,

  backgroundImage:
    "url('https://media.meer.com/attachments/8a7b6542979140ef376b97fa910d0e33b5e8a6ed/store/fill/1380/776/abc32695c1b6fdbfc581325fd6b5abf0e7cfe536b1bf0d3589a8565efe98/Il-viale-dei-Cipressi-di-Bolgheri-nel-cuore-della-Maremma-livornese.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",

  color: "#fff",
  "&>div": {
    maxWidth: 750,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: 50,
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "rgba(12, 12, 6, 0.55)",
    borderRadius: 20,
    boxShadow: "0px 0px 25px 11px rgb(16 16 17)",
  },
});

export const HomeList = styled("ul")({
  display: "flex",
  gap: 16,
});

export const HomeItem = styled("li")({
  display: "flex",
  gap: 8,
  maxWidth: 220,
  "&>svg": {
    fill: "#1976d2",
  },
});
