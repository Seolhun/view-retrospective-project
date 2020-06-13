import React from 'react';
import { Global, css } from '@emotion/core';
// StoriesBook Addons parameters
import { addDecorator, configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { StoriesThemeWrapper } from '../src/_stories';
import storybookTheme from './storybookTheme';

export const globalStyle = `
	html, body {
		height: 100%;
		width: 100%;
		font-size: 14px;
	}

	.html-lock-scroll {
		overflow: hidden !important;
	}
`;

function loadStories() {
  addDecorator((story) => (
    <StoriesThemeWrapper>
      <Global
        styles={css`
          ${globalStyle}
        `}
      />
      {story()}
    </StoriesThemeWrapper>
  ));
  addParameters({
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
  });
  addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  });
  addParameters({
    options: {
      name: 'Localize-Conponents UI',
      theme: storybookTheme,
    },
  });
}

configure(loadStories, module);
