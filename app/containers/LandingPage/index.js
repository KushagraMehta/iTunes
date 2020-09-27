/**
 *
 * LandingPage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, Divider, Typography, Input } from 'antd';
import { useInjectSaga } from 'utils/injectSaga';
// import getSongForLandingPage from './selectors';
import { landingPageActions } from './reducer';
import saga from './saga';
import MusicCard from '@components/MusicCard';

const { Search } = Input;

export function LandingPage({ dispatch, songData, intl }) {
  const [searchValue, setsearchValue] = useState('');

  const valueChangeHandler = event => setsearchValue(event.target.value);
  useInjectSaga({ key: 'landingPage', saga });
  const onSearchHandler = () => dispatch(landingPageActions.requestSearchResult(searchValue));
  return (
    <div>
      <Helmet>
        <title>iTunes Songs</title>
        <meta name="description" content="List itune songs" />
      </Helmet>
      <Divider orientation="left">{intl.formatMessage({ id: 'searchTitleBreak' })}</Divider>
      <Row justify="center" align="top">
        <Col>
          <Typography level={2}>{intl.formatMessage({ id: 'searchTitle' })}</Typography>
          <Search
            placeholder="input search text"
            onChange={valueChangeHandler}
            onSearch={onSearchHandler}
            enterButton
          />
        </Col>
      </Row>

      <Divider orientation="left">{intl.formatMessage({ id: 'songTileBreak' })}</Divider>
      <Row justify="space-around" align="top">
        {songData.map(song => (
          <Col span={6} key={song.trackId} offset="2">
            <MusicCard
              collectionName={song.collectionName}
              artistName={song.artistName}
              img={song.artworkUrl100}
              releaseDate={song.releaseDate}
              previewUrl={song.previewUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  songData: PropTypes.array,
  intl: PropTypes.object
};

// *** I tried to use selector but they are not updating with every change in redux state. So i'm doing with standard way.
// const mapStateToProps = createStructuredSelector({
//   songData: getSongForLandingPage()
// });

const mapStateToProps = state => {
  return {
    songData: state.landingPageReducer.results
  };
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(
  injectIntl,
  withConnect,
  memo
)(LandingPage);

// export default compose(withConnect)(LandingPage);
