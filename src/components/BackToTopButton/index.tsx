import {IconButton, styled, useMediaQuery} from "@mui/material";
import {theme} from "../../styles/ThemeProvider.ts";
import {FaArrowAltCircleUp} from "react-icons/fa";
import {useEffect, useState} from "react";

interface StyledButtonProps {
  isScreenLarge: boolean;
}

const StyledButton = styled(IconButton)<StyledButtonProps>(({ isScreenLarge }) => ({
  position: "fixed",
  bottom: isScreenLarge ? "5rem" : "6rem",
  right: "50px",
  zIndex: 1000,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: "white",
}));

export default function BackToTopButton() {
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [showScrollButton, setShowScrollButton] = useState(false);
  const checkScrollTop = () => {
    if (!showScrollButton && window.scrollY > 400) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= 400) {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return showScrollButton && (
    <StyledButton
      isScreenLarge={isScreenLarge}
      onClick={ scrollToTop }
    >
      <FaArrowAltCircleUp/>
    </StyledButton>
  )
}