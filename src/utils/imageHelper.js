import FactoryImage from "../Images/maps/factory-img.png";
import CustomImage from "../Images/maps/customs-img.png";
import WoodsImage from "../Images/maps/woods-img.png";
import LighthouseImage from "../Images/maps/lighthouse-img.png";
import ShorelineImage from "../Images/maps/shoreline-img.png";
import ReserveImage from "../Images/maps/reserve-img.png";
import InterchangeImage from "../Images/maps/interchange-img.png";
import StreetsImage from "../Images/maps/streets-img.png";
import TheLabImage from "../Images/maps/the-lab-img.png";
import GroundZeroImage from "../Images/maps/ground-zero-img.png";

const getImageSrc = (imgSrc) => {
  switch (imgSrc) {
    case "../Images/maps/factory-img.png":
      return FactoryImage;
    case "../Images/maps/customs-img.png":
      return CustomImage;
    case "../Images/maps/woods-img.png":
      return WoodsImage;
    case "../Images/maps/lighthouse-img.png":
      return LighthouseImage;
    case "../Images/maps/shoreline-img.png":
      return ShorelineImage;
    case "../Images/maps/reserve-img.png":
      return ReserveImage;
    case "../Images/maps/interchange-img.png":
      return InterchangeImage;
    case "../Images/maps/streets-img.png":
      return StreetsImage;
    case "../Images/maps/the-lab-img.png":
      return TheLabImage;
    case "../Images/maps/ground_zero-img.png":
      return GroundZeroImage;
    default:
      return null;
  }
};

export { getImageSrc };
