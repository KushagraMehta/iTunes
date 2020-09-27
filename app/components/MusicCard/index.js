/**
 *
 * MusicCard
 *
 */

import React, { memo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import { PlayCircleTwoTone, PauseCircleTwoTone } from '@ant-design/icons';
const { Meta } = Card;

function MusicCard({ artistName, img, releaseDate, previewUrl, collectionName }) {
  const [playAudio, setplayAudio] = useState(false);
  const audioElement = useRef(null);
  useEffect(() => {
    if (playAudio) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [playAudio]);
  const switchAudio = () => setplayAudio(!playAudio);
  return (
    <Card
      hoverable
      style={{ width: 200, position: 'relative' }}
      cover={
        <>
          <img alt="example" src={img.replace('100x100', '300x300')} />
          <Button
            style={{ position: 'absolute', top: '80%', right: -15 }}
            size="large"
            shape="circle"
            type="text"
            icon={
              playAudio ? (
                <PauseCircleTwoTone style={{ fontSize: '2.5em' }} />
              ) : (
                <PlayCircleTwoTone style={{ fontSize: '2.5em' }} />
              )
            }
            onClick={switchAudio}
          />
        </>
      }
    >
      <Meta title={collectionName} description={`${artistName} | ${releaseDate}`} />
      <audio ref={audioElement} src={previewUrl} />
    </Card>
  );
}

MusicCard.propTypes = {
  artistName: PropTypes.string,
  img: PropTypes.string,
  releaseDate: PropTypes.string,
  previewUrl: PropTypes.string,
  collectionName: PropTypes.string
};

export default memo(MusicCard);
