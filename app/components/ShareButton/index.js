import React, { PropTypes } from 'react';
import { Button, Popover, OverlayTrigger, FormGroup, InputGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Input from 'components/Input';
import Clipboard from 'clipboard';

export default function ShareButton(props) {
  // Clipboard.js: https://github.com/zenorocha/clipboard.js/issues/251
  // todo: upgrade to https://www.npmjs.com/package/react-clipboard.js
  new Clipboard('#share-button-copy-btn', { // eslint-disable-line no-new
    target: () => document.getElementById('share-button-value'),
  });

  const sharePopover = (
    <Popover id={props.id} title={props.title}>
      <FormGroup>
        <InputGroup>
          <Input id="share-button-value" readOnly type="text" value={props.shareUrl} autoFocus />
          <InputGroup.Button>
            <Button id="share-button-copy-btn" className="btn-primary">
              <FontAwesome name="clone" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={sharePopover}>
      <Button className="btn-info" title={props.title}><FontAwesome name="share-alt" /></Button>
    </OverlayTrigger>
  );
}

ShareButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  shareUrl: PropTypes.string,
};
