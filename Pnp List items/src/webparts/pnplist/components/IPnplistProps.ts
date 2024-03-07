import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IPnplistProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext; // Add or verify this line
}
