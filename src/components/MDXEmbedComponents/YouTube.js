import { getPadding } from './utils';
import { GeneralObserver } from './generalObserver';

export const YouTube = ({
  youTubeId,
  youTubePlaylistId,
  aspectRatio = '16:9',
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  noCookie = false,
}) => {
  const { h, m, s } = skipTo;

  const tH = h * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;

  const provider = noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com';
  const baseUrl = `${provider}/embed/`;
  const src = `${baseUrl}${
    youTubeId
      ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`
      : `&videoseries?list=${youTubePlaylistId}`
  }`;

  return (
    <GeneralObserver>
      <div
        className="youtube-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(aspectRatio),
        }}
      >
        <iframe
          data-testid="youtube"
          title={`youTube-${youTubeId ? youTubeId : youTubePlaylistId}`}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </GeneralObserver>
  );
};
