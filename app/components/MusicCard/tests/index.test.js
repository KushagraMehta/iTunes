/**
 *
 * Tests for MusicCard
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';

import MusicCard from '../index';

describe('<MusicCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<MusicCard />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<MusicCard />);
    expect(firstChild).toMatchSnapshot();
  });
});
