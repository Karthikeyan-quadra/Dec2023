import {
  ButtonClickedCallback,
  ICountryListItem
} from '../../../models';

// export interface ISpFxHttpClientDemoProps {
//   description: string;
//   isDarkTheme: boolean;
//   environmentMessage: string;
//   hasTeamsContext: boolean;
//   userDisplayName: string;
// }

export interface ISpFxHttpClientDemoProps {
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallback;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  onAddListItem?: ButtonClickedCallback;
onUpdateListItem?: ButtonClickedCallback;
onDeleteListItem?: ButtonClickedCallback;
}