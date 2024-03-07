import * as React from 'react';
import styles from './PnpPropertypane.module.scss';
import { IPnpPropertypaneProps } from './IPnpPropertypaneProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PnpPropertypane extends React.Component<IPnpPropertypaneProps, {}> {
  public render(): React.ReactElement<IPnpPropertypaneProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.pnpPropertypane} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
          <div className="selectedPeople">
          </div>
      </section>
    );
    
  }
}
