import { ReactSVG } from 'react-svg';

interface IProps {
  src?: string;
  height?: string;
  width?: string;
  color?: string;
}
/**
*
*/
const SvgWrapper = ({
  src,
  height,
  width,
  color,
}: IProps) => {
  const beforeInjectionHandler = (svg: SVGSVGElement) => {
    svg.setAttribute('style', `height: ${height};width: ${width}`);
    svg.childNodes.forEach((item) => {
      const it = item as HTMLElement;
      if (it.tagName === 'path' && color) {
        it.setAttribute('fill', color);
      }
    });
  };
  if (!src) {
    return null;
  }
  return (
    <ReactSVG
      src={src}
      wrapper="span"
      beforeInjection={beforeInjectionHandler}
    />
  );
};
SvgWrapper.defaultProps = {
  height: '25',
  width: '25',
  color: '',
  src: '',
};

export default SvgWrapper;
