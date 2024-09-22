export interface SpacerProps {
  size: number;
  vertical: boolean;
}

export default function Spacer({ size, vertical = true }) {
  return <div style={{ [vertical ? `height` : `width`]: `${size}px` }} />;
}
