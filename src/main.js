import React from 'react';
import ReactDom from 'react-dom';
import page from 'page';

import { init, populateEventModal } from './scripts/views/eventView';
window.populateModal = populateEventModal;

// vendor scripts
import './vendor/scripts/jquery-2.1.4';
import './vendor/scripts/jquery-ui';
import './vendor/scripts/cors-uploader';
import './vendor/scripts/geo-viewport';
import './vendor/scripts/mapbox-gl-v0.32.1';
import './vendor/scripts/tether';
import './vendor/scripts/bootstrap.min.js';
import './vendor/scripts/bootstrap3-typeahead.min.js';

// vendor style
import './vendor/styles/normalize.css';
import './vendor/styles/bootstrap-tagsinput.css';
import './vendor/styles/default.css';
import './vendor/styles/jquery-ui.min.css';
import './vendor/styles/jquery-ui.structure.min.css';
import './vendor/styles/normalize.css';
import './vendor/styles/railscasts.css';
import './vendor/scripts/iframeSizer.contentWindow.min.js'


// local styles
require('./styles/customboot.less');

import './scripts/controllers/routes';

