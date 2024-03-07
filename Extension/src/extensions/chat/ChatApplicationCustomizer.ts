// import { Log } from '@microsoft/sp-core-library';
// import {
//   BaseApplicationCustomizer
// } from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'ChatApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'ChatApplicationCustomizer';

// /**
//  * If your command set uses the ClientSideComponentProperties JSON input,
//  * it will be deserialized into the BaseExtension.properties object.
//  * You can define an interface to describe it.
//  */
// export interface IChatApplicationCustomizerProperties {
//   // This is an example; replace with your own property
//   testMessage: string;
// }

// /** A Custom Action which can be run during execution of a Client Side Application */
// export default class ChatApplicationCustomizer
//   extends BaseApplicationCustomizer<IChatApplicationCustomizerProperties> {

//   public onInit(): Promise<void> {
//     Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

//     let message: string = this.properties.testMessage;
//     if (!message) {
//       message = '(No properties were provided.)';
//     }

//     Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
//       /* handle error */
//     });

//     return Promise.resolve();
//   }
// }


import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
} from "@microsoft/sp-application-base";
// import * as strings from "ChatbotApplicationCustomizerStrings";
import styles from "./AppCustomizer.module.scss";
 
// const LOG_SOURCE: string = "ChatbotApplicationCustomizer";
 
export interface IChatbotApplicationCustomizerProperties {
  footer: string;
}
 
export default class ChatbotApplicationCustomizer extends BaseApplicationCustomizer<IChatbotApplicationCustomizerProperties> {
  private _bottomPlaceholder: PlaceholderContent | undefined;
 
  public onInit(): Promise<void> {
    // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
 
    this.context.placeholderProvider.changedEvent.add(
      this,
      this._renderPlaceHolders
    );
 
    return Promise.resolve();
  }
 
  private _renderPlaceHolders(): void {
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose }
        );
 
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Bottom) was not found.");
        return;
      }
 
      if (this.properties) {
        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
    <div class="${styles.app}">
        <div class="${styles.bottom}">
            <button id="popoverButton" class="${styles.btn}">
                <img src=${require("./OnlineSupport.png")} alt="Chatbot logo">
            </button>
            <div id="popoverContent" class="${
              styles.popoverContent
            }" style="display: none;">
               
                <iframe src="https://copilotstudio.microsoft.com/environments/Default-bf3faf5c-ce85-47df-8039-6d0b3b8c4cb5/bots/cr109_sharePointBot/webchat?__version__=2%22" class="${
                  styles.frame
                }" frameborder="0"></iframe>
            </div>
        </div>
    </div>`;
 
          const popoverButton =
            this._bottomPlaceholder.domElement.querySelector(
              "#popoverButton"
            ) as HTMLButtonElement;
          const popoverContent =
            this._bottomPlaceholder.domElement.querySelector(
              "#popoverContent"
            ) as HTMLElement;
 
          const closePopover = () => {
            popoverContent.style.display = "none";
            document.body.removeEventListener("click", closePopover);
          };
 
          if (popoverButton && popoverContent) {
            popoverButton.addEventListener("click", (event) => {
              event.stopPropagation(); // Prevents the click event from reaching the document body
              if (popoverContent.style.display === "none") {
                popoverContent.style.display = "block";
                document.body.addEventListener("click", closePopover);
              } else {
                popoverContent.style.display = "none";
                document.body.removeEventListener("click", closePopover);
              }
            });
 
            // Prevent clicks inside the popover from closing it
            popoverContent.addEventListener("click", (event) => {
              event.stopPropagation(); // Prevents the click event from reaching the document body
            });
          }
        }
      }
    }
  }
 
  private _onDispose(): void {
    console.log(
      "[ChatbotApplicationCustomizer._onDispose] Disposed custom bottom placeholder."
    );
  }
}