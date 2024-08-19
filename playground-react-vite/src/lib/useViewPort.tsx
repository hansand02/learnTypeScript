import { useMediaQuery } from "@uidotdev/usehooks";

const useViewPort = (): boolean => {
  return useMediaQuery("only screen and (max-width : 768px)");
};

export default useViewPort;
